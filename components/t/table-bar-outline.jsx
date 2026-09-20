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
		"content": `<style>.y-x2obo2t {
  fill: currentColor;
  d: path("m6 20l1.5-3.75q.225-.575.725-.913T9.35 15H11v-4.025Q7.175 10.85 4.587 9.85T2 7.5q0-1.45 2.925-2.475T12 4q4.175 0 7.088 1.025T22 7.5q0 1.35-2.588 2.35T13 10.975V15h1.65q.6 0 1.113.338t.737.912L18 20h-2l-1.2-3H9.2L8 20zm6-11q2.425 0 4.575-.425t3.15-1.075q-1-.65-3.15-1.075T12 6t-4.575.425T4.275 7.5q1 .65 3.15 1.075T12 9m0-1.5");
}
</style><path class="y-x2obo2t"/>`,
		"fallback": "material-symbols:table-bar-outline",
	});
}

export default Component;
