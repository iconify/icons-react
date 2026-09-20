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
		"content": `<style>.loobaw_qm {
  fill: currentColor;
  d: path("M3 22q-.413 0-.706-.294T2 21V3q0-.413.294-.706T3 2h18q.413 0 .706.294T22 3v18q0 .413-.294.706T21 22zm11.23-3H19v-4.712h-1v2.954l-3.477-3.476l-.713.713L17.33 18h-3.1zm-8.522 0L18 6.708v3.004h1V5h-4.77v1h3.062L5 18.292zm3.678-8.925l.689-.688L5.689 5L5 5.689z");
}
</style><path class="loobaw_qm"/>`,
		"fallback": "material-symbols-light:shuffle-on-outline",
	});
}

export default Component;
