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
		"content": `<style>.vjsmyhbeb {
  fill: currentColor;
  d: path("M6 14v-4h3.423L13 6.423v11.154L9.423 14zm9.77 1.308V8.642q.817.525 1.273 1.424q.457.898.457 1.934t-.457 1.91t-1.274 1.398M12 8.85L9.85 11H7v2h2.85L12 15.15zM9.5 12");
}
</style><path class="vjsmyhbeb"/>`,
		"fallback": "material-symbols-light:volume-down-outline-sharp",
	});
}

export default Component;
