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
		"content": `<style>.ai6npccvp {
  fill: currentColor;
  d: path("M7.225 15.775Q6.5 15.05 6.5 14t.725-1.775T9 11.5t1.775.725T11.5 14t-.725 1.775T9 16.5t-1.775-.725M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z");
}
</style><path class="ai6npccvp"/>`,
		"fallback": "material-symbols:today-rounded",
	});
}

export default Component;
