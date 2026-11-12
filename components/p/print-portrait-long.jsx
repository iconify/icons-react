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
		"content": `<style>.k-mw3zv7c {
  fill: currentColor;
  d: path("M4 10V7h1V5q0-.85.563-1.425T7 3q.675 0 1.438.338t1.387.612q.525.225 1.113.538t1.837.887q.55.275.888.775T14 7.225V20q0 1.125-.925 1.725t-1.875.1q-1.35-.65-2.662-1.075T6.5 20.125q-.675-.15-1.088-.7T5 18.175V17H4v-3h1v-4zm12 10V7.225q0-1.15-.65-2.137T13.65 3.6L12.475 3H17q.825 0 1.413.588T19 5v13q0 .825-.587 1.413T17 20z");
}
</style><path class="k-mw3zv7c"/>`,
		"fallback": "material-symbols:print-portrait-long",
	});
}

export default Component;
