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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.s7mi6l72v {
  d: path("M3.581 15.356a9.063 9.063 0 0 1 9.537-12.349l.006.001a.999.999 0 1 1-.248 1.984h-.004a7.063 7.063 0 0 0-7.233 10.076a3 3 0 1 1-2.058.288m16.838-6.712a9.1 9.1 0 0 1 .574 4.474l-.001.006a9.06 9.06 0 0 1-10.116 7.868a1 1 0 0 1-.757-1.465a1 1 0 0 1 .957-.524l.048.005a7.06 7.06 0 0 0 7.237-10.076a3 3 0 1 1 2.058-.288M18.999 7h.002a1 1 0 1 0-.002 0M4 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.sf2uf-b4k {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-8 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="sf2uf-b4k"/><path class="s7mi6l72v"/></g>`,
		"fallback": "coolicons:orbit-bulk-round",
	});
}

export default Component;
