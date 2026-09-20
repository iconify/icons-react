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
		"content": `<style>.d_ce1ia7v {
  fill: currentColor;
  d: path("M2.588 16.863Q2 16.275 2 15.45v-8q0-.825.588-1.412T4 5.45t1.413.6T6 7.475q.875-1.375 2.313-2.2T11.5 4.45q1.3 0 2.488.488T16.1 6.35l5.725 5.725l-9.175 9.175l-5.75-5.7q-.275-.275-.487-.55T6 14.425v1.025q0 .825-.587 1.413T4 17.45t-1.412-.587");
}
</style><path class="d_ce1ia7v"/>`,
		"fallback": "material-symbols:nest-cam-wall-mount-sharp",
	});
}

export default Component;
