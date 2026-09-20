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
		"content": `<style>.avcl--b_g {
  fill: currentColor;
  d: path("M5.525 21q-.675 0-1.2-.413T3.6 19.525l-2.55-9.25Q.925 9.8 1.213 9.4T2 9h4.75l4.4-6.55q.125-.2.35-.325T11.975 2t.475.125t.35.325L17.2 9H22q.5 0 .788.4t.162.875l-2.55 9.25q-.2.65-.725 1.063t-1.2.412zM5.5 19h13l2.2-8H3.3zm7.913-2.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9.174 9H14.8l-2.825-4.2zM12 15");
}
</style><path class="avcl--b_g"/>`,
		"fallback": "material-symbols:shopping-basket-outline",
	});
}

export default Component;
