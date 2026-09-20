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
		"content": `<style>.pfeip5bhz {
  fill: currentColor;
  d: path("M6.241 20.682q-.433-.434-.433-1.066t.433-1.067q.434-.433 1.067-.433t1.066.433t.434 1.067t-.434 1.066t-1.066.434t-1.067-.434m9.385 0q-.434-.434-.434-1.066t.434-1.067q.434-.433 1.066-.433t1.067.433q.433.434.433 1.067q0 .632-.433 1.066q-.434.434-1.067.434t-1.066-.434M2 3.5v-1h2.448l4.096 8.616h7l3.67-6.616h1.14l-4.225 7.616H8.1l-1.639 3h11.731v1H4.741l2.744-4.9L3.808 3.5zm9.5 3v-5h1v5zm-.115 3V8.27h1.23V9.5z");
}
</style><path class="pfeip5bhz"/>`,
		"fallback": "material-symbols-light:production-quantity-limits-outline-sharp",
	});
}

export default Component;
