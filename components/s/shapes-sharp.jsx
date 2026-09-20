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
		"content": `<style>.u5a4fs08f {
  fill: currentColor;
  d: path("M4.038 13.963Q2 11.925 2 9t2.038-4.962T9 2t4.963 2.038T16 9t-2.037 4.963T9 16t-4.962-2.037M8 22v-4.05q.25.025.5.038T9 18q3.75 0 6.375-2.625T18 9q0-.25-.012-.5T17.95 8H22v14z");
}
</style><path class="u5a4fs08f"/>`,
		"fallback": "material-symbols:shapes-sharp",
	});
}

export default Component;
