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
		"content": `<style>.ttcp0zbju {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.5 3h2.4v13.2H4.5zm4.8 15.6H6.9v-2.4h2.4zm2.4 0V21H9.3v-2.4zm0 0v-2.4h2.4v2.4zm3-15.6h2.4v10.8h-2.4zm2.4 10.8h2.4v2.4h-2.4z");
}
</style><path class="ttcp0zbju"/>`,
		"fallback": "token-branded:vega",
	});
}

export default Component;
