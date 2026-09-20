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
		"content": `<style>.mleiqcc5q {
  fill: currentColor;
  d: path("M16 22v-5h1v-1q0-.825.588-1.412T19 14t1.413.588T21 16v1h1v5zm2-5h2v-1q0-.425-.288-.712T19 15t-.712.288T18 16zm-6 5q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 .25-.012.5t-.038.5q-.225-.05-.462-.075T19 12q-2.075 0-3.537 1.45T14 17v4.25q-.475.25-.975.438T12 22");
}
</style><path class="mleiqcc5q"/>`,
		"fallback": "material-symbols:shield-locked-sharp",
	});
}

export default Component;
