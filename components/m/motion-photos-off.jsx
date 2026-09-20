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
		"content": `<style>.uujhtn3ms {
  fill: currentColor;
  d: path("m19.833 21.26l-2.237-2.237q-1.167.935-2.583 1.456T12 21q-1.868 0-3.51-.709t-2.857-1.923t-1.924-2.858T3 12q0-1.596.521-3.012q.521-1.417 1.456-2.584L2.741 4.167l.713-.713l17.092 17.092zm-.214-4.452L7.192 4.38q1.066-.67 2.274-1.025T12 3q1.868 0 3.51.709t2.858 1.924T20.29 8.49T21 12q0 1.327-.356 2.534q-.355 1.208-1.025 2.274");
}
</style><path class="uujhtn3ms"/>`,
		"fallback": "material-symbols-light:motion-photos-off",
	});
}

export default Component;
