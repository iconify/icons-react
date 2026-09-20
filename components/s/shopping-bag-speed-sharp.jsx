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
		"content": `<style>.u9-09mbcu {
  fill: currentColor;
  d: path("m5.27 21l.153-1.23h2.921L9.287 16h2.057l1.443-5.77H6.404L6.789 7h3.077l.057-.5q.2-1.664 1.163-2.582T13.712 3q1.465 0 2.393 1.11t.787 2.582L16.854 7h4.262l-1.712 14zM2 17.384l.25-1h4.48l-.25 1zm2-3.769l.25-1h5.48l-.25 1zM10.866 7h4.994l.038-.308Q16 5.617 15.316 4.81Q14.633 4 13.577 4q-1.183 0-1.849.653T10.923 6.5z");
}
</style><path class="u9-09mbcu"/>`,
		"fallback": "material-symbols-light:shopping-bag-speed-sharp",
	});
}

export default Component;
