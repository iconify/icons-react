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
		"content": `<style>.c0hdadbvs {
  fill: currentColor;
  d: path("M8 13h2v-3q0-.825.588-1.412T12 8V6q-1.65 0-2.825 1.175T8 10zm-4 8q-.825 0-1.412-.587T2 19v-2q0-.825.588-1.412T4 15h1v-5q0-2.925 2.038-4.962T12 3t4.963 2.038T19 10v5h1q.825 0 1.413.588T22 17v2q0 .825-.587 1.413T20 21z");
}
</style><path class="c0hdadbvs"/>`,
		"fallback": "material-symbols:siren",
	});
}

export default Component;
