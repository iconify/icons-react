import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zn51-_bki {
  fill: currentColor;
  d: path("M12 2a1 1 0 0 0-1 1v1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v1a3 3 0 1 0 6 0v-1h1a1 1 0 0 0 1-1V9.013A9.5 9.5 0 0 1 17.5 28H4a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2h-4.017A11.49 11.49 0 0 0 29 18.5c0-6.184-4.88-11.228-11-11.49V5a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1zm2 16v1a1 1 0 1 1-2 0v-1zm2-2h-6V6h6zm-8 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z");
}
</style><path class="zn51-_bki"/>`,
		"fallback": "fluent:microscope-32-regular",
	});
}

export default Component;
