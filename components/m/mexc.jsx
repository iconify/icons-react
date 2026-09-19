import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lldms3bos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.503 35.994H9.658c-4.58 0-6.348-4.037-4.338-7.52l8.046-13.942c.82-1.42 2.18-2.534 4.214-2.534s3.395 1.114 4.215 2.534l10.128 17.559c.811 1.406 2.654 3.549 5.123 3.91");
}

.ne-bu5b-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.343 35.994c4.577 0 6.346-4.038 4.338-7.52l-8.042-13.942c-.82-1.42-2.181-2.534-4.215-2.534s-3.395 1.114-4.214 2.534l-8.046 13.942c-2.01 3.483-.242 7.52 4.338 7.52z");
}
</style><path class="ne-bu5b-s"/><path class="lldms3bos"/>`,
		"fallback": "arcticons:mexc",
	});
}

export default Component;
