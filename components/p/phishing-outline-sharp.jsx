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
		"content": `<style>.tiohs9jpo {
  fill: currentColor;
  d: path("M7.471 18.471Q6 16.942 6 14.788v-4.576l3.558 3.634l-.689.695L7 12.594v2.195q0 1.727 1.185 2.969Q9.369 19 11.077 19t2.892-1.242q1.185-1.242 1.185-2.97v-3.367q-.804-.177-1.325-.805q-.521-.627-.521-1.462t.511-1.472t1.335-.815V3h1v3.867q.823.177 1.335.815T18 9.154t-.512 1.465t-1.334.802v3.368q0 2.153-1.471 3.682T11.077 20t-3.606-1.529m9.136-8.364Q17 9.714 17 9.154t-.393-.953t-.953-.393t-.953.393t-.393.953t.393.953t.953.393t.953-.393m-.953-.953");
}
</style><path class="tiohs9jpo"/>`,
		"fallback": "material-symbols-light:phishing-outline-sharp",
	});
}

export default Component;
