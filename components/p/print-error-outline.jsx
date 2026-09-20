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
		"content": `<style>.t2ccqibsv {
  fill: currentColor;
  d: path("M7 20v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.558 0 1.013.275q.455.274.697.726H5.577q-.425 0-.712.287t-.288.713V15H7v-1.538h9.116v1H8V19h8.116v1zM7 8.615v-4h10v4h-1v-3H8v3zM18.48 19.79q-.21-.21-.21-.52t.21-.521q.209-.21.52-.21t.52.21t.21.52t-.21.52Q19.312 20 19 20t-.52-.21m.02-4.02v-4h1v4zM4.577 9.615h15.556z");
}
</style><path class="t2ccqibsv"/>`,
		"fallback": "material-symbols-light:print-error-outline",
	});
}

export default Component;
