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
		"content": `<style>.clxk-sb_d {
  d: path("m2.5 12l9.5 5.5l9.5-5.5");
}

.lxczy9weo {
  d: path("m2.5 16l9.5 5.5l9.5-5.5");
}

.qeh_2obwx {
  d: path("M12 2.5L21.5 8L12 13.5L2.5 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qeh_2obwx"/><path class="clxk-sb_d"/><path class="lxczy9weo"/></g>`,
		"fallback": "uix-sharp:layers-triple",
	});
}

export default Component;
