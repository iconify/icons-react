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
		"content": `<style>.x8_wqdyqe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 3.25h-11q-2.25 0-2.25 2.25q0 .932.659 1.591q.18.18.381.311l.488 4.394q.017-.059.043-.114t.06-.105t.076-.094t.091-.081q.048-.037.102-.065t.111-.048q.058-.019.118-.029t.121-.01h11q.061 0 .121.01t.118.029q.057.019.111.048q.054.028.102.065q.049.037.091.081t.076.094t.06.105t.043.114l.488-4.394q.201-.131.381-.311q.659-.659.659-1.591q0-2.25-2.25-2.25m.659 9.107q-.048.089-.118.163q-.07.073-.157.124t-.185.079q-.098.027-.199.027h-11q-.101 0-.199-.027t-.185-.079q-.087-.051-.157-.124t-.118-.163l.914 8.226q.007.068.027.134q.02.065.051.126q.032.061.074.116q.042.054.093.1t.11.081q.058.036.122.061q.064.024.132.037q.067.012.136.012h9q.069 0 .136-.012q.068-.013.132-.037q.064-.025.122-.061q.059-.035.11-.081t.093-.1t.074-.116q.031-.061.051-.126q.02-.066.027-.134z");
}
</style><path class="x8_wqdyqe"/>`,
		"fallback": "uix-solid:takeaway-cup",
	});
}

export default Component;
