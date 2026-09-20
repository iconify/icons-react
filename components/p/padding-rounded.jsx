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
		"content": `<style>.lx8h-t1_d {
  fill: currentColor;
  d: path("M8.655 8.655q.23-.23.23-.54t-.23-.539t-.54-.23t-.539.23t-.23.54q0 .309.23.539t.54.23t.539-.23m3.885 0q.23-.23.23-.54t-.23-.539t-.54-.23t-.54.23t-.23.54t.23.539t.54.23t.54-.23m3.884 0q.23-.23.23-.54t-.23-.539t-.54-.23q-.309 0-.539.23t-.23.54t.23.539t.54.23t.539-.23M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="lx8h-t1_d"/>`,
		"fallback": "material-symbols-light:padding-rounded",
	});
}

export default Component;
