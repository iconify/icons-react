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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.i9p3hfjts {
  fill-rule: evenodd;
  d: path("M7.5 12a1 1 0 0 1 1-1H11a6 6 0 0 1 6 6v2a1 1 0 1 1-2 0v-2a4 4 0 0 0-4-4H8.5a1 1 0 0 1-1-1M7 15.5a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1");
}

.uxntokpsh {
  fill-rule: evenodd;
  d: path("M11.5 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M7 8.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.z02wqvqwy {
  fill-rule: evenodd;
  d: path("M2 4a2.5 2.5 0 0 1 5 0v3.272c0 .883.31 1.737.874 2.415l1.394 1.673a1 1 0 1 1-1.536 1.28l-1.394-1.673A5.77 5.77 0 0 1 5 7.272V4a.5.5 0 0 0-1 0v3.75a4 4 0 0 0 .47 1.882l3.412 6.397a1 1 0 0 1-1.764.942l-3.412-6.398A6 6 0 0 1 2 7.75z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxntokpsh"/><path clip-rule="evenodd" class="z02wqvqwy"/><path clip-rule="evenodd" class="i9p3hfjts"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:raise-hand-off",
	});
}

export default Component;
