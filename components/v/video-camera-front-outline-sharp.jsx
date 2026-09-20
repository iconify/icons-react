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
		"content": `<style>.bzkzbefgp {
  fill: currentColor;
  d: path("M6 16h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45zm4-4q.825 0 1.413-.587T12 10t-.587-1.412T10 8t-1.412.588T8 10t.588 1.413T10 12m-8 8V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6z");
}
</style><path class="bzkzbefgp"/>`,
		"fallback": "material-symbols:video-camera-front-outline-sharp",
	});
}

export default Component;
