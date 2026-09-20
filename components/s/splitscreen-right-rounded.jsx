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
		"content": `<style>.vy7e6lbiv {
  fill: currentColor;
  d: path("M15 20q-.69 0-1.153-.462t-.462-1.153V5.615q0-.69.462-1.152T15 4h2.77q.69 0 1.152.463q.463.462.463 1.153v12.769q0 .69-.463 1.153Q18.46 20 17.77 20zm-8.77 0q-.69 0-1.152-.462q-.463-.463-.463-1.153V5.615q0-.69.463-1.152Q5.541 4 6.231 4H9q.69 0 1.153.463t.463 1.153v12.769q0 .69-.463 1.153T9 20zM5.617 5.615v12.77q0 .23.192.423T6.23 19H9q.23 0 .423-.192q.193-.193.193-.424V5.616q0-.231-.193-.424Q9.231 5 9 5H6.23q-.23 0-.422.192t-.192.423");
}
</style><path class="vy7e6lbiv"/>`,
		"fallback": "material-symbols-light:splitscreen-right-rounded",
	});
}

export default Component;
