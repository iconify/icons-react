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
		"content": `<style>.bi259hqjm {
  fill: currentColor;
  d: path("M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h3.1q.175-.45.55-.725T7.5 4h2q.475 0 .85.275T10.9 5H21q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm18-2V7H3v10zM3 7v10zm2.713 5.713Q6 12.425 6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13t.713-.288");
}
</style><path class="bi259hqjm"/>`,
		"fallback": "material-symbols:mobile-landscape-outline",
	});
}

export default Component;
