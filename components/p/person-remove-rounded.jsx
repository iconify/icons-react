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
		"content": `<style>.f1y5an-jo {
  fill: currentColor;
  d: path("M17 9h4q.425 0 .713.288T22 10t-.288.713T21 11h-4q-.425 0-.712-.288T16 10t.288-.712T17 9M6.175 10.825Q5 9.65 5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12t-2.825-1.175M1 18v-.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18");
}
</style><path class="f1y5an-jo"/>`,
		"fallback": "material-symbols:person-remove-rounded",
	});
}

export default Component;
