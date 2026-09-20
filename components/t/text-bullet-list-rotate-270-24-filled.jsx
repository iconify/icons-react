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
		"content": `<style>.vb7e6ibzg {
  fill: currentColor;
  d: path("M16.5 20.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm.5-4V2.997a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.116L17 16.5Zm-6.5 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm.5-4V2.997a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.116L11 16.5Zm-6.492 4a1.5 1.5 0 1 1 2.999 0a1.5 1.5 0 0 1-3 0Zm.493-4V2.997a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.116L5 16.5Z");
}
</style><path class="vb7e6ibzg"/>`,
		"fallback": "fluent:text-bullet-list-rotate-270-24-filled",
	});
}

export default Component;
