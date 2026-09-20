import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e_izmxd-k {
  fill: currentColor;
  d: path("m29.524 31.292l12.092 12.092a1.25 1.25 0 1 0 1.768-1.767l-37-37a1.25 1.25 0 1 0-1.768 1.767L16.71 18.477l-6.25 2.159c-1.92.663-2.484 3.108-1.047 4.544l5.82 5.82L6 40.233V42h1.768L17 32.768l5.82 5.82c1.437 1.437 3.881.874 4.544-1.046zm11.692-7.502l-8.082 4.041l-12.965-12.964l4.041-8.082c1.45-2.9 5.315-3.527 7.608-1.235L42.45 16.183c2.293 2.292 1.665 6.157-1.234 7.607");
}
</style><path class="e_izmxd-k"/>`,
		"fallback": "fluent:pin-off-48-filled",
	});
}

export default Component;
