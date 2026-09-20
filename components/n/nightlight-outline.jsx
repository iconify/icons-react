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
		"content": `<style>.uaupddcad {
  fill: currentColor;
  d: path("M14 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T4 11.988t.788-3.875t2.15-3.175t3.187-2.15T14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.637 3.588T14 12t1.363 5.063T19 20.65q-1.1.65-2.375 1T14 22m0-2h.525q.25 0 .475-.05q-1.425-1.65-2.212-3.687T12 12t.788-4.262T15 4.05Q14.775 4 14.525 4H14q-3.325 0-5.663 2.338T6 12t2.338 5.663T14 20m-2-8");
}
</style><path class="uaupddcad"/>`,
		"fallback": "material-symbols:nightlight-outline",
	});
}

export default Component;
