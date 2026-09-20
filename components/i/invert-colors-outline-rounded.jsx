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
		"content": `<style>.ix3aemxqg {
  fill: currentColor;
  d: path("M12 21q-3.325 0-5.663-2.312T4 13.1q0-1.65.625-3.05t1.725-2.5l4.6-4.525q.225-.2.5-.312T12 2.6t.55.113t.5.312l4.6 4.525q1.1 1.1 1.725 2.5T20 13.1q0 3.275-2.337 5.588T12 21m0-2V4.8L7.75 9q-.875.825-1.312 1.863T6 13.1q0 2.425 1.75 4.163T12 19");
}
</style><path class="ix3aemxqg"/>`,
		"fallback": "material-symbols:invert-colors-outline-rounded",
	});
}

export default Component;
