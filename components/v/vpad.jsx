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
		"content": `<style>.dqtu10b0n {
  fill: var(--svg-color--68ffd2, #68ffd2);
  fill-rule: evenodd;
  d: path("m3 4.125l9 15.75l9-15.75zm4.972 2.812L9.384 9.57l-1.322 1.867h2.402L12 14.25l3.853-7.313z");
}
</style><path clip-rule="evenodd" class="dqtu10b0n"/>`,
		"fallback": "token-branded:vpad",
	});
}

export default Component;
