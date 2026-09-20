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
		"content": `<style>.a4yc2nb7n {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 20c-1 0-1 1-1 1v5h-9v-5s0-1-1-1s-1 1-1 1v11s0 2 2 2h9c2 0 2-2 2-2V21s0-1-1-1");
}

.d7lte1brt {
  d: path("M33 9H22V3s0-1-1-1s-1 1-1 1v6c-8 0-8 7-8 7v2c0 1 1 1 1 1h3s1 0 1-1v-2c0-2 2-2 2-2h14c1 0 1-1 1-1v-3s0-1-1-1");
}

.grl05tbza {
  d: path("M18.5 3h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3m5 3h3a1.5 1.5 0 1 0 0-3h-3a1.5 1.5 0 1 0 0 3");
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.yulfqxbcm {
  fill: var(--svg-color--269, #269);
  d: path("M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4z");
}
</style><path class="yulfqxbcm"/><g class="n1mjunbsu"><path class="d7lte1brt"/><path class="grl05tbza"/></g><path class="a4yc2nb7n"/>`,
		"fallback": "twemoji:potable-water",
	});
}

export default Component;
