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
		"content": `<style>.pwagb3kcm {
  d: path("m10 9.5l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}

.zghbd-bez {
  d: path("M10 15.5v-1l2-2v-5m2 8v-1l-2-2");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="zghbd-bez"/><path class="pwagb3kcm"/></g>`,
		"fallback": "uix-sharp:two-lanes-merge-sign",
	});
}

export default Component;
