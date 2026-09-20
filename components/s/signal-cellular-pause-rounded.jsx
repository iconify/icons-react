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
		"content": `<style>.zvh22zbmc {
  fill: currentColor;
  d: path("M3.7 20.3L20.3 3.7q.475-.475 1.088-.213t.612.938V12q0 .425-.288.713T21 13h-5q-1.25 0-2.125.875T13 16v5q0 .425-.288.713T12 22H4.425q-.675 0-.937-.612T3.7 20.3M19 21v-5q0-.425.288-.712T20 15t.713.288T21 16v5q0 .425-.288.713T20 22t-.712-.288T19 21m-4 0v-5q0-.425.288-.712T16 15t.713.288T17 16v5q0 .425-.288.713T16 22t-.712-.288T15 21");
}
</style><path class="zvh22zbmc"/>`,
		"fallback": "material-symbols:signal-cellular-pause-rounded",
	});
}

export default Component;
