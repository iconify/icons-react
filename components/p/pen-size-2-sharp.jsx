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
		"content": `<style>.hzke15b6j {
  fill: currentColor;
  d: path("M5.025 18q0-.425.275-.7l12-12q.275-.3.688-.3t.712.3q.275.275.275.7t-.275.7l-12 12q-.275.275-.7.275t-.7-.275t-.275-.7");
}
</style><path class="hzke15b6j"/>`,
		"fallback": "material-symbols:pen-size-2-sharp",
	});
}

export default Component;
