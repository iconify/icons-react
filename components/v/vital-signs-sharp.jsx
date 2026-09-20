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
		"content": `<style>.fn-mx6brv {
  fill: currentColor;
  d: path("M2.039 12.5v-1h5.238l2.146 5.446l5.154-12.613l2.892 7.167H22v1h-5.238l-2.185-5.466l-5.173 12.614L6.569 12.5z");
}
</style><path class="fn-mx6brv"/>`,
		"fallback": "material-symbols-light:vital-signs-sharp",
	});
}

export default Component;
