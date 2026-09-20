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
		"content": `<style>.qtdmqnbzt {
  fill: var(--svg-color--0085ff, #0085ff);
  d: path("m12.402 6.706l-1.64-2.647H3l8.92 15.882l1.668-2.78L7.664 6.707zm-2.54 1.588h3.218l1.287 2.139l3.414-6.374H21l-6.633 11.795z");
}
</style><path class="qtdmqnbzt"/>`,
		"fallback": "token-branded:verse",
	});
}

export default Component;
