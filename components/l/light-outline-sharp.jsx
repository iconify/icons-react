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
		"content": `<style>.mkmvdx43t {
  fill: currentColor;
  d: path("M12 19.077q-1.285 0-2.18-.896T8.922 16H4.09q-.04-.2-.065-.456Q4 15.287 4 15q.011-3.134 2.171-5.47T11.5 7.012V4.385h1v2.627q3.17.182 5.329 2.518Q19.989 11.866 20 15q0 .288-.025.544T19.91 16h-4.833q0 1.285-.896 2.18T12 19.078M5 15h14q0-2.9-2.05-4.95T12 8t-4.95 2.05T5 15m8.47 2.467q.607-.61.607-1.467H9.923q0 .864.612 1.47t1.47.607t1.465-.61M12 16");
}
</style><path class="mkmvdx43t"/>`,
		"fallback": "material-symbols-light:light-outline-sharp",
	});
}

export default Component;
