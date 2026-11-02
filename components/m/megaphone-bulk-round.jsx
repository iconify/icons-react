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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.vq6nh9jtg {
  d: path("M6 13h5a1 1 0 0 1 0 2h-1v4a3 3 0 0 1-6 0v-4.535a4 4 0 0 1-1.864-4.501A4 4 0 0 1 6 7h5a1 1 0 0 1 0 2H6a2 2 0 1 0 0 4m0 6a1 1 0 0 0 2 0v-4H6Z");
}

.xjm0stb0d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.553 7.106l6-3c1.12-.56 2.457-.597 3.583-.034c.534.267.996.658 1.328 1.154C21.816 5.753 22 6.367 22 7v8c0 .633-.184 1.247-.536 1.774a3.44 3.44 0 0 1-1.328 1.154c-1.126.563-2.463.526-3.583-.034l-6-3A1 1 0 0 1 10 14V8c0-.379.214-.725.553-.894");
}
</style><g class="cuyn6tgcc"><path class="xjm0stb0d"/><path class="vq6nh9jtg"/></g>`,
		"fallback": "coolicons:megaphone-bulk-round",
	});
}

export default Component;
