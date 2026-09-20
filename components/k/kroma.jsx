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
		"content": `<style>.i-a52ob3n {
  fill: var(--svg-color--7ae03a, #7ae03a);
}

.ivq7x3b_d {
  d: path("m12 3.375l-9 5.75L7.5 12L12 9.125L16.5 12L21 9.125z");
}

.m7uhdgbjl {
  d: path("m21 9.125l-9 5.75l-9-5.75v5.75l9 5.75l9-5.75z");
}
</style><g class="i-a52ob3n"><path class="ivq7x3b_d"/><path class="m7uhdgbjl"/></g>`,
		"fallback": "token-branded:kroma",
	});
}

export default Component;
