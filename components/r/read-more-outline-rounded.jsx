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
		"content": `<style>.wu-w38e3c {
  fill: currentColor;
  d: path("M9.075 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h6.075L6.75 8.65q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275l4.05 4.05q.3.3.3.7t-.3.7l-4.05 4.05q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7zM14 17q-.425 0-.712-.288T13 16t.288-.712T14 15h7q.425 0 .713.288T22 16t-.288.713T21 17zm0-8q-.425 0-.712-.288T13 8t.288-.712T14 7h7q.425 0 .713.288T22 8t-.288.713T21 9zm3 4q-.425 0-.712-.288T16 12t.288-.712T17 11h4q.425 0 .713.288T22 12t-.288.713T21 13z");
}
</style><path class="wu-w38e3c"/>`,
		"fallback": "material-symbols:read-more-outline-rounded",
	});
}

export default Component;
