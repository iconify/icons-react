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

.t44sk6bly {
  d: path("m6.236 9.777l-.763-1.291l6.791-4.013l.763 1.291zm6.021 5.752l.772-1.286l-6.286-3.772l-.772 1.286z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.xpu820bhy {
  fill-rule: evenodd;
  d: path("M5 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m9-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="xpu820bhy"/><path class="t44sk6bly"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:share-android-off",
	});
}

export default Component;
