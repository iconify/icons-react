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
		"content": `<style>.buc-_ybgy {
  cx: 12px;
  cy: 14px;
  r: 3px;
  fill: currentColor;
}

.z8jafbwqu {
  fill: currentColor;
  d: path("M18 8h1.33c0-1.84-1.49-3.33-3.33-3.33V6c1.11 0 2 .89 2 2m2.67 0H22c0-3.31-2.69-6-6-6v1.33c2.58 0 4.67 2.09 4.67 4.67M15 7V4H9L7.17 6H2v16h20V9h-5c0-1.1-.9-2-2-2m-3 12c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><circle class="buc-_ybgy"/><path class="z8jafbwqu"/>`,
		"fallback": "ic:sharp-linked-camera",
	});
}

export default Component;
