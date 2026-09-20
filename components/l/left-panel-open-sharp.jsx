import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vl4eejpgx {
  fill: currentColor;
  d: path("M12.5 8v8l4-4zM10 19h9V5h-9zm-7 2V3h18v18z");
}
</style><path class="vl4eejpgx"/>`,
		"fallback": "material-symbols:left-panel-open-sharp",
	});
}

export default Component;
