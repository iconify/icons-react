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
		"content": `<style>.b_hoykbkp {
  fill: currentColor;
  d: path("M12 17.75q1.95 0 3.35-1.4t1.4-3.35t-1.4-3.35T12 8.25q-.95 0-1.775.35t-1.475.95V8h-1.5v4.25h4.25v-1.5H9.7q.425-.45 1.025-.725T12 9.75q1.35 0 2.3.95t.95 2.3t-.95 2.3t-2.3.95q-1.1 0-1.925-.638T8.9 14H7.35q.35 1.625 1.638 2.688T12 17.75M4 22V2h10l6 6v14z");
}
</style><path class="b_hoykbkp"/>`,
		"fallback": "material-symbols:restore-page-sharp",
	});
}

export default Component;
