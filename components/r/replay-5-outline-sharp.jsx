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
		"content": `<style>.lw2zmfdbj {
  fill: currentColor;
  d: path("M8.882 20.374q-1.455-.626-2.542-1.713t-1.714-2.543T4 13h1q0 2.925 2.038 4.963T12 20t4.963-2.037T19 13t-2.037-4.962T12 6h-.38l1.626 1.627l-.708.72L9.692 5.48l2.885-2.866l.708.72L11.619 5H12q1.664 0 3.118.626T17.66 7.34t1.714 2.542T20 13t-.626 3.118t-1.714 2.543t-2.542 1.713T12 21t-3.118-.626m.926-4.682v-.884h3v-1.424h-3v-3.076h3.884v.884h-3v1.424h3v3.076z");
}
</style><path class="lw2zmfdbj"/>`,
		"fallback": "material-symbols-light:replay-5-outline-sharp",
	});
}

export default Component;
