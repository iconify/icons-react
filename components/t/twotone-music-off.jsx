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
		"content": `<style>.e1gvbqbwd {
  cx: 10px;
  cy: 17px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.j2j2_ximq {
  fill: currentColor;
  d: path("M14 7h4V3h-6v4.61l2 2zm-2 3.44L4.41 2.86L3 4.27l9 9v.28c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41zM10 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
}
</style><circle class="e1gvbqbwd"/><path class="j2j2_ximq"/>`,
		"fallback": "ic:twotone-music-off",
	});
}

export default Component;
