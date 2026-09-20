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
		"content": `<style>.wt-czmoqt {
  fill: currentColor;
  d: path("M4 17V5H2V3h4v12h15v2zm2 5q-.825 0-1.412-.587T4 20t.588-1.412T6 18t1.413.588T8 20t-.587 1.413T6 22m1-8V8h6v6zm7 0V8h6v6zm3.588 7.413Q17 20.825 17 20t.588-1.412T19 18t1.413.588T21 20t-.587 1.413T19 22t-1.412-.587");
}
</style><path class="wt-czmoqt"/>`,
		"fallback": "material-symbols:trolley",
	});
}

export default Component;
