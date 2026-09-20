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
		"content": `<style>.wz_pbnbvd {
  fill: currentColor;
  d: path("M7.388 17.288Q5.425 15.575 5.075 13H2v-2h3.075q.35-2.575 2.313-4.288T12 5t4.613 1.713T18.925 11H22v2h-3.075q-.35 2.575-2.312 4.288T12 19t-4.612-1.713M12 17q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17m-2-1.5h4q.425 0 .713-.288T15 14.5v-3q0-.425-.288-.712T14 10.5v-.9q0-.875-.575-1.487T12 7.5q-.825 0-1.412.588T10 9.5v1q-.425 0-.712.288T9 11.5v3q0 .425.288.713T10 15.5m2-1.75q-.325 0-.537-.213T11.25 13t.213-.537t.537-.213t.538.213t.212.537t-.213.538t-.537.212m-1-3.25v-1q0-.425.288-.712T12 8.5t.713.288T13 9.5v1zm1 2.5");
}
</style><path class="wz_pbnbvd"/>`,
		"fallback": "material-symbols:private-connectivity-outline",
	});
}

export default Component;
