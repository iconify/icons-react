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
		"content": `<style>.b86l3tbiz {
  fill-rule: evenodd;
  d: path("M10 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.emetnrpfu {
  d: path("M13.73 10a1 1 0 1 1 0-2a3 3 0 0 1 2.89 2.197l1.39 5A3 3 0 0 1 15.118 19H4.88a3 3 0 0 1-2.89-3.803l1.389-5A3 3 0 0 1 6.27 8a1 1 0 0 1 0 2a1 1 0 0 0-.963.732l-1.39 5A1 1 0 0 0 4.882 17H15.12a1 1 0 0 0 .963-1.268l-1.389-5A1 1 0 0 0 13.73 10");
}

.llu0kzb4j {
  fill-rule: evenodd;
  d: path("M5 7.286C5 10.199 7.805 15 10 15s5-4.801 5-7.714C15 4.38 12.777 2 10 2S5 4.381 5 7.286m8 0C13 9.24 10.803 13 10 13S7 9.24 7 7.286C7 5.456 8.36 4 10 4s3 1.456 3 3.286");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="b86l3tbiz"/><path clip-rule="evenodd" class="llu0kzb4j"/><path class="emetnrpfu"/></g>`,
		"fallback": "pepicons-pop:map",
	});
}

export default Component;
