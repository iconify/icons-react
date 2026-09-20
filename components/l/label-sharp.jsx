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
		"content": `<style>.vtv2llbak {
  fill: currentColor;
  d: path("M3 19V5h12.635L21 12l-5.365 7z");
}
</style><path class="vtv2llbak"/>`,
		"fallback": "material-symbols-light:label-sharp",
	});
}

export default Component;
