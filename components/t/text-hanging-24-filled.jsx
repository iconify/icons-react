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
		"content": `<style>.m_jz0mb1p {
  fill: currentColor;
  d: path("M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm7 12a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2zm-1-5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m-4.293 1.293a1 1 0 0 0-1.414 1.414L4.586 16l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z");
}
</style><path class="m_jz0mb1p"/>`,
		"fallback": "fluent:text-hanging-24-filled",
	});
}

export default Component;
