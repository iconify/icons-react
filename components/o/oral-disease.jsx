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
		"content": `<style>.farlmoe7l {
  fill: currentColor;
  d: path("M5 22v-9h2V8.4L3.6 5l4-4L9 2.4L6.4 5L9 7.6V13h2v9zm8 0v-9h2V9.875q-1.3-.35-2.15-1.4T12 6q0-1.65 1.175-2.825T16 2t2.825 1.175T20 6q0 1.425-.85 2.475T17 9.875V13h2v9zm3-14q.825 0 1.413-.587T18 6t-.587-1.412T16 4t-1.412.588T14 6t.588 1.413T16 8");
}
</style><path class="farlmoe7l"/>`,
		"fallback": "material-symbols:oral-disease",
	});
}

export default Component;
