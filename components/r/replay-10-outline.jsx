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
		"content": `<style>.miqto2b_b {
  fill: currentColor;
  d: path("M8.488 21.288q-1.638-.713-2.85-1.925t-1.925-2.85T3 13h2q0 2.925 2.038 4.963T12 20t4.963-2.037T19 13t-2.037-4.962T12 6h-.15l1.55 1.55L12 9L8 5l4-4l1.4 1.45L11.85 4H12q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22t-3.512-.712M9 16v-4.5H7.5V10h3v6zm3.5 0q-.425 0-.712-.288T11.5 15v-4q0-.425.288-.712T12.5 10h2q.425 0 .713.288T15.5 11v4q0 .425-.288.713T14.5 16zm.5-1.5h1v-3h-1z");
}
</style><path class="miqto2b_b"/>`,
		"fallback": "material-symbols:replay-10-outline",
	});
}

export default Component;
