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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.xc00nqbup {
  fill: var(--svg-color--fff, #fff);
  d: path("m4.8 16.4l-.8-.848l.832-.752H10l-4-4V9.6h1.2l4 4.092V8.4l.8-.8l.8.8v5.292l4-4.092H18v1.2l-4 4h5.2l.8.8l-.8.8h-6L12 15.2l-1.2 1.2z");
}
</style><g class="ft5dv1b6b"><path class="mumfproca"/><path class="xc00nqbup"/></g>`,
		"fallback": "token-branded:quartz-background",
	});
}

export default Component;
