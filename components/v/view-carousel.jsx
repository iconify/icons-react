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
		"content": `<style>.engaucb3l {
  fill: currentColor;
  d: path("M3 14.327V9.673q0-.69.492-1.181T4.673 8t1.182.492t.491 1.181v4.654q0 .69-.491 1.182Q5.363 16 4.673 16t-1.182-.492Q3 15.018 3 14.328M9.346 18q-.69 0-1.153-.462t-.462-1.153v-8.77q0-.69.462-1.152T9.346 6h5.308q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T14.654 18zm8.308-3.673V9.673q0-.69.491-1.181Q18.637 8 19.327 8t1.182.492Q21 8.983 21 9.673v4.654q0 .69-.492 1.182t-1.18.491t-1.182-.492t-.491-1.181");
}
</style><path class="engaucb3l"/>`,
		"fallback": "material-symbols-light:view-carousel",
	});
}

export default Component;
