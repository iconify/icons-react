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
		"content": `<style>.ey8vxab9x {
  fill: currentColor;
  d: path("m10 9.75l1.325-.65q.325-.15.675-.15t.675.15L14 9.75V5h-4zM8 17q-.425 0-.712-.288T7 16t.288-.712T8 15h3q.425 0 .713.288T12 16t-.288.713T11 17zm-3 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 5v14zm0 14h14V5h-3v6.375q0 .575-.475.863t-.975.037L12 11l-2.55 1.275q-.5.25-.975-.038T8 11.376V5H5z");
}
</style><path class="ey8vxab9x"/>`,
		"fallback": "material-symbols:package-outline-rounded",
	});
}

export default Component;
