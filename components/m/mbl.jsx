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
		"content": `<style>.b6fs05qmm {
  d: path("M21 5.813L8.625 8.18v7.74L21 18.187z");
}

.kfo2910sv {
  fill: var(--svg-color--5b449b, #5b449b);
}

.knzib4sih {
  d: path("M3 19.875V4.125l10.125 1.997l-4.5.815l-3.938-.815V17.85l3.938-.788l4.5.788z");
}
</style><g class="kfo2910sv"><path class="knzib4sih"/><path class="b6fs05qmm"/></g>`,
		"fallback": "token-branded:mbl",
	});
}

export default Component;
