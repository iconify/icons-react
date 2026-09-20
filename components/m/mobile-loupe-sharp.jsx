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
		"content": `<style>.iqvzj0bqc {
  fill: currentColor;
  d: path("M6 22V2h12.077v6.285q-.426-.085-.851-.127q-.426-.042-.851-.042q-3.353.049-5.781 2.47t-2.478 5.789q-.031 1.64.525 3.036q.555 1.395 1.611 2.589zm10.498.5q-2.516 0-4.282-1.774t-1.72-4.3q.047-2.408 1.784-4.146t4.147-1.784q2.525-.046 4.299 1.72t1.774 4.282V22.5zm-.44-3.5v-2.058h-1.933v-.884h1.933V14h.884v2.058h1.933v.884h-1.933V19zm-3.47-12.914q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22m7.455 13.954q1.457-1.459 1.457-3.543t-1.459-3.541t-3.543-1.457t-3.541 1.459t-1.457 3.543t1.459 3.541t3.543 1.457t3.541-1.459");
}
</style><path class="iqvzj0bqc"/>`,
		"fallback": "material-symbols-light:mobile-loupe-sharp",
	});
}

export default Component;
