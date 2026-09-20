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
		"content": `<style>.fibpxnblu {
  fill: currentColor;
  d: path("M7.77 17.462h.846v-1.27h6.768v1.27h.847v-3.385q0-.698-.497-1.195t-1.195-.497h-2.962v2.961H8.616V11.54h-.847zm3.079-2.846q.305-.308.305-.753q0-.446-.308-.75t-.752-.305t-.75.307t-.305.753t.307.75t.753.305t.75-.308M5 20V9.5l7-5.27l7 5.27V20z");
}
</style><path class="fibpxnblu"/>`,
		"fallback": "material-symbols-light:night-shelter",
	});
}

export default Component;
