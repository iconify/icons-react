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
		"content": `<style>.pr9tv7bum {
  fill: currentColor;
  d: path("M12 17.135q1.72 0 2.927-1.208T16.135 13t-1.208-2.927T12 8.866q-1.065 0-1.852.465t-1.321 1.065V8.692h-.885v3.25h3.25v-.884H9.431q.386-.547 1.063-.927T12 9.75q1.35 0 2.3.95t.95 2.3t-.95 2.3t-2.3.95q-1.1 0-1.925-.638T8.9 14h-.935q.408 1.452 1.513 2.293t2.522.842M5 21V3h8.577L19 8.423V21zm1-1h12V8.85L13.15 4H6zm0 0V4z");
}
</style><path class="pr9tv7bum"/>`,
		"fallback": "material-symbols-light:restore-page-outline-sharp",
	});
}

export default Component;
