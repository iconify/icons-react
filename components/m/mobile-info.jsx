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
		"content": `<style>.peruhy_bb {
  fill: currentColor;
  d: path("M7.616 22q-.672 0-1.144-.472T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.846q.67 0 1.143.472q.472.472.472 1.144V6.83q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v9.869q0 .67-.472 1.143q-.472.472-1.143.472zm3.884-6.038h1v-5h-1zm.934-6.99q.182-.181.182-.433t-.182-.434T12 7.923t-.434.182t-.182.434t.182.433t.434.182t.434-.182");
}
</style><path class="peruhy_bb"/>`,
		"fallback": "material-symbols-light:mobile-info",
	});
}

export default Component;
