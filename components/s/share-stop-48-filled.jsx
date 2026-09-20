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
		"content": `<style>.t-95p3wqm {
  fill: currentColor;
  d: path("M8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h30.5A4.75 4.75 0 0 0 44 35.25v-22.5A4.75 4.75 0 0 0 39.25 8zm13.482 16l-5.866-5.866a1.25 1.25 0 0 1 1.768-1.768L24 22.232l5.866-5.866a1.25 1.25 0 0 1 1.768 1.768L25.768 24l5.866 5.866a1.25 1.25 0 0 1-1.768 1.768L24 25.768l-5.866 5.866a1.25 1.25 0 0 1-1.768-1.768z");
}
</style><path class="t-95p3wqm"/>`,
		"fallback": "fluent:share-stop-48-filled",
	});
}

export default Component;
