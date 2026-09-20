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
		"content": `<style>.f0hd69lil {
  fill: currentColor;
  d: path("M10 21v-2h1.6L2.3 9.7l1.4-1.4l9.3 9.3V16h2v5zm5.1-5.55l-1.35-1.35l1.3-2.65L11.9 8.3L9.25 9.55L7.9 8.2l10.7-4.85l1.4 1.4zm-1.65-7.9l2.3 2.35l2.1-4.35l-.05-.05z");
}
</style><path class="f0hd69lil"/>`,
		"fallback": "material-symbols:text-rotation-angledown",
	});
}

export default Component;
