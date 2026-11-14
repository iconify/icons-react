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
		"content": `<style>.s_t88abqt {
  d: path("M12.5 20.5h-10v-18h18V12M6 6.5h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgh72pbud {
  d: path("M6 9.75h5.5v5.5H6Zm8.25.5H17m.372 5.589l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}
</style><g class="ulnmmdpxh"><path class="s_t88abqt"/><path class="zgh72pbud"/></g>`,
		"fallback": "uix-sharp:news-feed-settings",
	});
}

export default Component;
