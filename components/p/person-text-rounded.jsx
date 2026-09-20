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
		"content": `<style>.rymyc8biv {
  fill: currentColor;
  d: path("M18 18q-.425 0-.712-.288T17 17t.288-.712T18 16h3q.425 0 .713.288T22 17t-.288.713T21 18zm-2-5q-.425 0-.712-.288T15 12t.288-.712T16 11h5q.425 0 .713.288T22 12t-.288.713T21 13zm-2-5q-.425 0-.712-.288T13 7t.288-.712T14 6h7q.425 0 .713.288T22 7t-.288.713T21 8zm-8.125 3.125Q5 10.25 5 9t.875-2.125T8 6t2.125.875T11 9t-.875 2.125T8 12t-2.125-.875M3 18q-.425 0-.712-.288T2 17v-.9q0-.525.25-1t.7-.75q1.125-.675 2.388-1.012T8 13t2.663.338t2.387 1.012q.45.275.7.75t.25 1v.9q0 .425-.288.713T13 18z");
}
</style><path class="rymyc8biv"/>`,
		"fallback": "material-symbols:person-text-rounded",
	});
}

export default Component;
