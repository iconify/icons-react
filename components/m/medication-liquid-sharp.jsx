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
		"content": `<style>.mhej3k8ib {
  fill: currentColor;
  d: path("M3 5V3h12v2zm4.5 12.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5zM2 21V6h14v15zm17-7.25q-.875-.425-1.437-1.412T17 10q0-1.7.863-2.85T20 6t2.138 1.15T23 10q0 1.35-.562 2.338T21 13.75V21h-2z");
}
</style><path class="mhej3k8ib"/>`,
		"fallback": "material-symbols:medication-liquid-sharp",
	});
}

export default Component;
