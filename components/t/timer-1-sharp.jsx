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
		"content": `<style>.ykifiqb5b {
  fill: currentColor;
  d: path("M12 19V8H8V5h7v14z");
}
</style><path class="ykifiqb5b"/>`,
		"fallback": "material-symbols:timer-1-sharp",
	});
}

export default Component;
