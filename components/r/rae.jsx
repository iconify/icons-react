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
		"content": `<style>.wcpb_nb_s {
  fill: var(--svg-color--383f51, #383f51);
  d: path("M7.33 11.526L3 8.793l7.579-4.372zm9.34 0L21 8.793l-7.579-4.372zM8.685 12L12 4.42L15.316 12L12 19.579z");
}
</style><path class="wcpb_nb_s"/>`,
		"fallback": "token-branded:rae",
	});
}

export default Component;
