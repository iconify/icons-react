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
		"content": `<style>.tl-cvpdxb {
  fill: currentColor;
  d: path("M10.588 21.413Q10 20.825 10 20h4q0 .825-.587 1.413T12 22t-1.412-.587M17.45 14.6L6.85 4.05q1.025-.95 2.338-1.5T12 2q3.125 0 5.313 2.188T19.5 9.5q0 1.775-.625 3.038T17.45 14.6m-4.3 1.4h-4.9q-1.725-1.025-2.738-2.75T4.5 9.5q0-.5.063-.975T4.75 7.6L2.1 4.9q-.275-.275-.288-.687T2.1 3.5q.275-.275.7-.275t.7.275l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3zM9 19q-.425 0-.712-.288T8 18t.288-.712T9 17h6.15q.425 0 .713.288t.287.712t-.287.713t-.713.287z");
}
</style><path class="tl-cvpdxb"/>`,
		"fallback": "material-symbols:light-off-rounded",
	});
}

export default Component;
