import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c2ghy7q-f {
  fill: currentColor;
  d: path("M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-48V36h4a44.05 44.05 0 0 1 44 44M68 80a43.6 43.6 0 0 1 2-13l33 33H68Zm48-44v43L83.49 46.52A43.83 43.83 0 0 1 112 36Zm28 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44");
}
</style><path class="c2ghy7q-f"/>`,
		"fallback": "ph:mouse-left-click-bold",
	});
}

export default Component;
