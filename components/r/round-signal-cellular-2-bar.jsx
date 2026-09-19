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
		"content": `<style>.avs9u3b-n {
  fill: currentColor;
  d: path("M14 10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14z");
}

.ld-sdrbtn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71");
}
</style><path class="ld-sdrbtn"/><path class="avs9u3b-n"/>`,
		"fallback": "ic:round-signal-cellular-2-bar",
	});
}

export default Component;
