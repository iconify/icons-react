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
		"content": `<style>.wjxptkbya {
  fill: currentColor;
  d: path("M9 20q-3.35 0-5.675-2.325T1 12t2.325-5.675T9 4h6q3.35 0 5.675 2.325T23 12t-2.325 5.675T15 20zm3-6q.825 0 1.413-.587T14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14m-2-5h4V7h-4zm0 8h4v-2h-4zm5-3h2v-4h-2zm-8 0h2v-4H7z");
}
</style><path class="wjxptkbya"/>`,
		"fallback": "material-symbols:tools-installation-kit-sharp",
	});
}

export default Component;
