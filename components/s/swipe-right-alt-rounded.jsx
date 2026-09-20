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
		"content": `<style>.jmttyubib {
  fill: currentColor;
  d: path("M9.5 16.5q-1.864 0-3.182-1.318T5 12t1.318-3.182T9.5 7.5q1.748 0 3.005 1.138t1.472 2.862h5.102l-1.746-1.746q-.14-.14-.15-.341q-.01-.202.156-.367q.159-.16.353-.16t.354.16l2.389 2.388q.13.132.183.268q.053.137.053.298t-.053.298q-.052.137-.183.268l-2.389 2.388q-.14.14-.341.15t-.366-.15q-.166-.166-.166-.357t.166-.357l1.74-1.74h-5.102q-.215 1.725-1.472 2.863T9.5 16.5");
}
</style><path class="jmttyubib"/>`,
		"fallback": "material-symbols-light:swipe-right-alt-rounded",
	});
}

export default Component;
