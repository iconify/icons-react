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
		"content": `<style>.dat3vz8_z {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-3.5A2.5 2.5 0 0 0 8 10.5V14H4.5A2.5 2.5 0 0 1 2 11.5zm7 9.359a2.5 2.5 0 0 0 .94-.591l3.328-3.329a2.5 2.5 0 0 0 .59-.939H10.5A1.5 1.5 0 0 0 9 10.5z");
}
</style><path class="dat3vz8_z"/>`,
		"fallback": "fluent:note-16-filled",
	});
}

export default Component;
