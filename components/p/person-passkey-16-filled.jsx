import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.agof0e_rv {
  fill: currentColor;
  d: path("M4.5 8h5.825a3.2 3.2 0 0 0 .961 1.83v3.217c-.83.58-1.94.953-3.286.953c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5m6.241 8.388A2.501 2.501 0 1 0 12 9.5v3.858c0 .091.035.179.097.245l1.166 1.24c.137.144.366.15.509.01l1.166-1.13a.357.357 0 0 0 .033-.476L14 12l.9-.77a.357.357 0 0 0 .042-.5zm.009-3.138a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><path class="agof0e_rv"/>`,
		"fallback": "fluent:person-passkey-16-filled",
	});
}

export default Component;
