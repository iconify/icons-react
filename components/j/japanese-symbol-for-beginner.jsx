import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aj9fryn-n {
  fill: var(--svg-color--47ded4, #47ded4);
  d: path("M17 13L28 2v21L17 34z");
}

.h-0xfxbxb {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M17 36a2 2 0 0 1-1.414-.586l-11-11A2 2 0 0 1 4 23V2A2 2 0 0 1 7.414.586L17 10.171L26.586.586A1.998 1.998 0 0 1 30 2v21a2 2 0 0 1-.586 1.414l-11 11A2 2 0 0 1 17 36");
}

.n1yb49bkn {
  fill: var(--svg-color--ffff87, #ffff87);
  d: path("m6 2l11 11v21L6 23z");
}
</style><path class="h-0xfxbxb"/><path class="aj9fryn-n"/><path class="n1yb49bkn"/>`,
		"fallback": "twemoji:japanese-symbol-for-beginner",
	});
}

export default Component;
