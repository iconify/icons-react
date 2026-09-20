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
		"content": `<style>.gj_1vkapn {
  fill: currentColor;
  d: path("M3 21q-.825 0-1.412-.587T1 19V6h2v13h17v2zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h5l2 2h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17zm2-4h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="gj_1vkapn"/>`,
		"fallback": "material-symbols:perm-media",
	});
}

export default Component;
