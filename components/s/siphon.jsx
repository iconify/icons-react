import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.osp-9gb9h {
  d: path("M128 256h128V128H128v128z");
  fill: var(--svg-color--5884a3, #5884A3);
}

.xo8pw1bod {
  d: path("M128 129h128V0H128v129z");
  fill: var(--svg-color--6296ba, #6296BA);
}

.zlikhnb7c {
  d: path("M0 256h129V128H0v128z");
  fill: var(--svg-color--4c728c, #4C728C);
}
</style><path class="zlikhnb7c"/><path class="xo8pw1bod"/><path class="osp-9gb9h"/>`,
		"fallback": "logos:siphon",
	});
}

export default Component;
