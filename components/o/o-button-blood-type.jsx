import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b1mcg03gd {
  fill: var(--svg-color--fff, #fff);
  d: path("M6.993 18.001c0-6.656 4.48-11.776 11.007-11.776c6.432 0 11.008 5.28 11.008 11.776c0 6.623-4.449 11.774-11.008 11.774c-6.496 0-11.007-5.151-11.007-11.774m17.023 0c0-3.872-2.016-7.36-6.016-7.36s-6.015 3.488-6.015 7.36c0 3.903 1.952 7.359 6.015 7.359c4.065 0 6.016-3.456 6.016-7.359");
}

.bmlp1dldp {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="bmlp1dldp"/><path class="b1mcg03gd"/>`,
		"fallback": "twemoji:o-button-blood-type",
	});
}

export default Component;
