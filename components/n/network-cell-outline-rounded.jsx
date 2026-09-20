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
		"content": `<style>.f-4iaxwpd {
  fill: currentColor;
  d: path("M4.425 22q-.45 0-.737-.3T3.4 21q0-.2.075-.375T3.7 20.3L20.3 3.7q.15-.15.325-.225T21 3.4q.4 0 .7.287t.3.738V20.5q0 .625-.437 1.063T20.5 22zM17 20h3V6.85l-3 3z");
}
</style><path class="f-4iaxwpd"/>`,
		"fallback": "material-symbols:network-cell-outline-rounded",
	});
}

export default Component;
