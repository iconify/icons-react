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
		"content": `<style>.qgug4x6ju {
  fill: currentColor;
  d: path("M12 15.385q.1 0 .267-.181l.075-.112q.337-.679.925-1.167q.59-.488 1.01-1.104q.237-.348.355-.74t.118-.814q0-1.12-.803-1.886t-1.944-.765t-1.96.761t-.818 1.883q0 .423.121.818t.355.749q.426.604 1.01 1.094q.582.49.922 1.171l.075.107q.025.036.292.186m-.753-3.27q-.305-.307-.305-.752q0-.446.308-.75t.753-.305t.75.307t.305.753t-.308.75t-.753.305t-.75-.307M8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18z");
}
</style><path class="qgug4x6ju"/>`,
		"fallback": "material-symbols-light:location-chip",
	});
}

export default Component;
