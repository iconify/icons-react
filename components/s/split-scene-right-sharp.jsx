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
		"content": `<style>.ydc3gto7h {
  fill: currentColor;
  d: path("M3 20V4h6v16zm8 2V2h2v2h8v16h-8v2z");
}
</style><path class="ydc3gto7h"/>`,
		"fallback": "material-symbols:split-scene-right-sharp",
	});
}

export default Component;
