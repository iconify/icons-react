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
		"content": `<style>.j9gcmrb2x {
  fill: currentColor;
  d: path("M12 16q2.55-2.3 3.275-3.238T16 10.9q0-.9-.65-1.55T13.8 8.7q-.525 0-1.013.212T12 9.5q-.3-.375-.775-.587T10.2 8.7q-.9 0-1.55.65T8 10.9q0 .475.125.875t.55.938t1.212 1.312T12 16m0 6q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22");
}
</style><path class="j9gcmrb2x"/>`,
		"fallback": "material-symbols:shield-with-heart",
	});
}

export default Component;
