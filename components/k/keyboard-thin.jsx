import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k4zzz8bmv {
  fill: currentColor;
  d: path("M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-24-64a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m0-32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M68 160a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4m96 0a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m40 0a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4");
}
</style><path class="k4zzz8bmv"/>`,
		"fallback": "ph:keyboard-thin",
	});
}

export default Component;
