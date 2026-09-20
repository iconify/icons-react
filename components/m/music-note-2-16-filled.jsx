import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y8sondphq {
  fill: currentColor;
  d: path("M12 5.21v5.058A2 2 0 1 0 13 12V1.925a.8.8 0 0 0-1.07-.754l-6.4 2.286A.8.8 0 0 0 5 4.21v7.057A2 2 0 1 0 6 13V7.351z");
}
</style><path class="y8sondphq"/>`,
		"fallback": "fluent:music-note-2-16-filled",
	});
}

export default Component;
