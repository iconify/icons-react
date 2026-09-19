import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ltsf8fbft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.414V9.586l19.099 28.828V9.586M28.086 24h9.369m-9.369 14.414V9.586H42.5");
}
</style><path class="ltsf8fbft"/>`,
		"fallback": "arcticons:nofasel",
	});
}

export default Component;
