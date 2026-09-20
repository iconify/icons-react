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
		"content": `<style>.a831ulbsq {
  fill: currentColor;
  d: path("M2.76 18L4.479 6H19.52l1.72 12h-2.418l-3-3H8.177l-3 3zm14.808-5.432q.24-.24.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24t.568-.24M15 9.808q.329 0 .568-.24t.24-.568t-.24-.568t-.568-.24t-.568.24t-.24.568t.24.568t.568.24m-6.942 2.884h.884v-1.75h1.75v-.884h-1.75v-1.75h-.884v1.75h-1.75v.884h1.75z");
}
</style><path class="a831ulbsq"/>`,
		"fallback": "material-symbols-light:sports-esports-sharp",
	});
}

export default Component;
