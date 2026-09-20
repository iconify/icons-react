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
		"content": `<style>.n2ru59beu {
  fill: var(--svg-color--a950fe, #a950fe);
  fill-rule: evenodd;
  d: path("m12 3l-9 9l9 9l9-9zm2.035 3.77L12.04 4.78l-7.23 7.23l4.4 4.4l4.01-4.005l.76.76l-4.01 4.005l2.02 2.02l7.23-7.23l-4.4-4.4l-4.035 4.03l-.785-.785z");
}
</style><path clip-rule="evenodd" class="n2ru59beu"/>`,
		"fallback": "token-branded:sofi",
	});
}

export default Component;
