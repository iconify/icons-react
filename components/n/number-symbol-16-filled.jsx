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
		"content": `<style>.z1ep50bbl {
  fill: currentColor;
  d: path("M11.993 2.853a.75.75 0 0 0-1.485-.212l-.337 2.36H6.686l.306-2.145a.75.75 0 1 0-1.484-.212L5.17 5H3.75a.75.75 0 0 0-.001 1.5h1.207l-.428 3H2.75a.75.75 0 1 0 0 1.5h1.565l-.306 2.144a.75.75 0 1 0 1.485.212L5.83 11h3.485l-.306 2.144a.75.75 0 1 0 1.485.212L10.831 11h1.419a.75.75 0 0 0 0-1.5h-1.206l.428-3l1.778.001a.75.75 0 0 0 0-1.5h-1.564zM9.957 6.501L9.529 9.5H6.044l.428-3z");
}
</style><path class="z1ep50bbl"/>`,
		"fallback": "fluent:number-symbol-16-filled",
	});
}

export default Component;
