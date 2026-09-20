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
		"content": `<style>.b45fygb1b {
  fill: currentColor;
  d: path("M2 20v-8h14v-1.725l6.675-2.225l.625 1.9l-5.3 1.775V20zm2-2h12v-4H4zm.425-8q.35-.9.113-1.6T3.725 7Q2.9 6 2.637 5.112T2.55 3H4.5q-.2.95-.062 1.55t.712 1.3Q6.1 7 6.363 7.888T6.375 10zm4 0q.35-.9.125-1.6T7.75 7q-.825-1-1.1-1.888T6.55 3H8.5q-.2.95-.062 1.55t.712 1.3Q10.1 7 10.363 7.888T10.375 10zm4 0q.35-.9.125-1.6t-.8-1.4q-.825-1-1.1-1.888T10.55 3h1.95q-.2.95-.062 1.55t.712 1.3Q14.1 7 14.363 7.888T14.375 10z");
}
</style><path class="b45fygb1b"/>`,
		"fallback": "material-symbols:skillet-outline-sharp",
	});
}

export default Component;
