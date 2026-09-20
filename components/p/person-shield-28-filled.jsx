import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k45-nubqr {
  fill: currentColor;
  d: path("M19.901 14.23a.895.895 0 0 1 1.198 0c.797.769 2.33 1.993 4.215 2.244c.376.05.686.336.686.695v3.355c0 4.51-4.374 6.146-5.32 6.448a.6.6 0 0 1-.359 0c-.946-.302-5.32-1.938-5.321-6.448V17.17c0-.359.31-.645.685-.695c1.885-.251 3.419-1.475 4.216-2.245M14.493 16A1.6 1.6 0 0 0 14 17.17v3.354l.016.483c.122 1.974.99 3.447 2.022 4.505A16.2 16.2 0 0 1 12 26c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zM12 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12");
}
</style><path class="k45-nubqr"/>`,
		"fallback": "fluent:person-shield-28-filled",
	});
}

export default Component;
