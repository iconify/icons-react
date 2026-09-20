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
		"content": `<style>.oaic_u28w {
  fill: currentColor;
  d: path("M4 17V5H2V3h4v12h15v2zm2 5q-.825 0-1.412-.587T4 20t.588-1.412T6 18t1.413.588T8 20t-.587 1.413T6 22m1-8V8h6v6zm2-2h2v-2H9zm5 2V8h6v6zm2-2h2v-2h-2zm1.588 9.413Q17 20.825 17 20t.588-1.412T19 18t1.413.588T21 20t-.587 1.413T19 22t-1.412-.587M9 12h2zm7 0h2z");
}
</style><path class="oaic_u28w"/>`,
		"fallback": "material-symbols:trolley-outline",
	});
}

export default Component;
