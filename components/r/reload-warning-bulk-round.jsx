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
		"content": `<style>.c54zq2pps {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.056 12a8.946 8.946 0 1 1 17.89 0a8.946 8.946 0 1 1-17.89 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.euw2mzirq {
  d: path("M5.826 7H8a1 1 0 0 1 0 2H4a1 1 0 0 1-1-.986V4a1 1 0 0 1 2 0v.937a9.94 9.94 0 0 1 15.894 2.616a1 1 0 1 1-1.788.894a7.9 7.9 0 0 0-1.489-2.064A7.936 7.936 0 0 0 5.826 7M13 8v5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m5.174 9H16a1 1 0 0 1 0-2h4a1 1 0 0 1 1 .986V20a1 1 0 0 1-2 0v-.937a9.94 9.94 0 0 1-15.894-2.616a1 1 0 1 1 1.788-.894A7.947 7.947 0 0 0 18.174 17M12 15h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="c54zq2pps"/><path class="euw2mzirq"/></g>`,
		"fallback": "coolicons:reload-warning-bulk-round",
	});
}

export default Component;
