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
		"content": `<style>.pg__49q5l {
  fill: currentColor;
  d: path("M12 21q-3.325 0-5.663-2.3T4 13.125q0-1.65.625-3.062T6.35 7.55l4.6-4.525q.225-.2.5-.312T12 2.6t.55.113t.5.312l4.6 4.525q1.1 1.1 1.725 2.513T20 13.125q0 3.275-2.337 5.575T12 21m0-2V4.8L7.75 9q-.875.825-1.312 1.875T6 13.125q0 2.425 1.75 4.15T12 19");
}
</style><path class="pg__49q5l"/>`,
		"fallback": "material-symbols:invert-colors-rounded",
	});
}

export default Component;
