import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s5redjemw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.429 33.507l-.775-2.89a6.49 6.49 0 0 1 4.588-7.947h0a6.49 6.49 0 0 1 7.947 4.588h0l.775 2.892");
}

.tqb1r-way {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.895 36.868c-.428-1.598 2.03-3.645 5.492-4.572c3.462-.928 6.615-.384 7.043 1.213c.428 1.598-2.031 3.645-5.492 4.572c-3.462.928-6.615.384-7.043-1.213l-.775-2.893C2.337 23.591 8.5 12.917 18.884 10.135s21.058 3.38 23.84 13.763l.776 2.893c.428 1.598-2.031 3.645-5.492 4.572c-3.462.928-6.615.384-7.043-1.213c-.428-1.598 2.03-3.645 5.492-4.572c3.462-.928 6.615-.385 7.043 1.213");
}
</style><path class="s5redjemw"/><path class="tqb1r-way"/>`,
		"fallback": "arcticons:noodles-and-company",
	});
}

export default Component;
