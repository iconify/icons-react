import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3tp12fer {
  fill: var(--svg-color--ea596e, #ea596e);
  d: path("M18 11c-6 0-11-1-11-1v12c0 6.075 4.925 11 11 11s11-4.925 11-11V10s-5 1-11 1");
}

.o2-0wp3ap {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M19 29a1 1 0 1 1-2 0V13a1 1 0 0 1 2 0z");
}

.wc-ikigll {
  fill: var(--svg-color--662113, #662113);
  d: path("M36 7.5C36 12 27.941 19 18 19S0 12 0 7.5C0 6 3 9 18 9s18-3 18-1.5");
}
</style><path class="wc-ikigll"/><path class="b3tp12fer"/><path class="o2-0wp3ap"/>`,
		"fallback": "twemoji:tongue",
	});
}

export default Component;
