import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_w7xlb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.64 23.098l-7.997-4.617a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902L39.64 24.9a1.041 1.041 0 0 0 0-1.803m-11.12 6.422l-7.998-4.617a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902l7.997-4.618a1.041 1.041 0 0 0 0-1.803m.001-12.841l-7.998-4.617a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902l7.997-4.618a1.041 1.041 0 0 0 0-1.803m-11.121-6.421L9.401 5.64a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902l7.997-4.618a1.041 1.041 0 0 0 0-1.803m0 12.841L9.401 18.48a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902l7.997-4.618a1.041 1.041 0 0 0 0-1.803m0 12.843l-7.997-4.617a1.041 1.041 0 0 0-1.562.901v9.235a1.041 1.041 0 0 0 1.562.902l7.997-4.618a1.041 1.041 0 0 0 0-1.803");
}
</style><path class="q_w7xlb1f"/>`,
		"fallback": "arcticons:totalplay",
	});
}

export default Component;
