import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hyqackb8v {
  d: path("M10 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m4.768 9.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129");
}

.k2ase5h9w {
  d: path("M14.768 6.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409");
}

.k91gmxjhw {
  d: path("M10 16a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.kzgf5zbjd {
  d: path("M5.232 6.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.x16p-1rfc {
  d: path("M5.232 13.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="kzgf5zbjd"/><path class="k2ase5h9w"/><path class="hyqackb8v"/><path class="x16p-1rfc"/><path class="k91gmxjhw"/></g>`,
		"fallback": "pepicons-pop:move-y",
	});
}

export default Component;
