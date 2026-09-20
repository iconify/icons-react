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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.hdotsrl_o {
  fill: var(--svg-color--32b5e1, #32b5e1);
  d: path("M14.25 20.158L21 3.878c-3.19-.382-5.389 2.397-6.565 5.271L9.75 20.158z");
}

.zwh0ceb2g {
  fill: var(--svg-color--bde6f3, #bde6f3);
  d: path("M9.188 20.158L3 3.878c3.19-.382 5.389 2.397 6.565 5.271l4.686 11.009z");
}
</style><g class="ft5dv1b6b"><path class="zwh0ceb2g"/><path class="hdotsrl_o"/></g>`,
		"fallback": "token-branded:vix",
	});
}

export default Component;
