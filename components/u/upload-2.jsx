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
		"content": `<style>.jzrmx8arg {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm5-4v-7H5l7-9l7 9h-4v7z");
}
</style><path class="jzrmx8arg"/>`,
		"fallback": "material-symbols:upload-2",
	});
}

export default Component;
