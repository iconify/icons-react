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
		"content": `<style>.ituvkzbfz {
  fill: currentColor;
  d: path("M11.385 21v-7.615H22V21zm1-1H21v-2.808h-8.615zm0-3.808H21v-1.807h-8.615zM12 3.077l7 2.615V11h-1V6.375l-6-2.23l-6 2.23V11.1q0 2.025.813 3.863T9 18.1v1.292q-1.808-1.403-2.904-3.584T5 11.1V5.692z");
}
</style><path class="ituvkzbfz"/>`,
		"fallback": "material-symbols-light:shield-card-outline-sharp",
	});
}

export default Component;
