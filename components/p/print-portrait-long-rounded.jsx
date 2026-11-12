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
		"content": `<style>.fz-roac2g {
  fill: currentColor;
  d: path("M11.2 21.825q-1.35-.65-2.662-1.087T6.5 20.125q-.675-.175-1.088-.712T5 18.175V17q-.425 0-.712-.288T4 16v-1q0-.425.288-.712T5 14v-4q-.425 0-.712-.288T4 9V8q0-.425.288-.712T5 7V5q0-.85.563-1.425T7 3q.675 0 1.438.338t1.387.612q.525.225 1.113.538t1.837.887q.55.275.888.775T14 7.225V20q0 1.125-.925 1.713t-1.875.112M16 20V7.225q0-1.15-.663-2.125T13.65 3.6L12.475 3H17q.825 0 1.413.588T19 5v13q0 .825-.587 1.413T17 20z");
}
</style><path class="fz-roac2g"/>`,
		"fallback": "material-symbols:print-portrait-long-rounded",
	});
}

export default Component;
