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
		"content": `<style>.v_v0lxbzn {
  fill: currentColor;
  d: path("M11 17v-1h2v1zm0-1.5v-.775q-.475-.275-.737-.737T10 13q0-.825.588-1.412T12 11t1.413.588T14 13q0 .525-.262.988t-.738.737v.775zm5 .45l-1.05-1.075q.275-.425.413-.9T15.5 13t-.138-.975t-.412-.9L16 10.05q.5.65.75 1.4T17 13t-.25 1.55t-.75 1.4m-8 0q-.5-.65-.75-1.4T7 13q0-2.075 1.463-3.537T12 8V6.75l2.25 2l-2.25 2V9.5q-1.45 0-2.475 1.025T8.5 13q0 .5.138.975t.412.9zM4 23V1h16v22zm2-5h12V6H6zm0 2v1h12v-1zM6 4h12V3H6zm0-1v1zm0 18v-1z");
}
</style><path class="v_v0lxbzn"/>`,
		"fallback": "material-symbols:on-device-training-outline-sharp",
	});
}

export default Component;
