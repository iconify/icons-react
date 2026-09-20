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
		"content": `<style>.e8b53_bgp {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V6.65l13.075-5.325q.35-.125.688.013t.462.487t-.012.688t-.488.462L8.3 6H20q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm5.775-3.725q.725-.725.725-1.775t-.725-1.775T8 14t-1.775.725T5.5 16.5t.725 1.775T8 19t1.775-.725M4 11h12v-1q0-.425.288-.712T17 9t.713.288T18 10v1h2V8H4z");
}
</style><path class="e8b53_bgp"/>`,
		"fallback": "material-symbols:radio-rounded",
	});
}

export default Component;
