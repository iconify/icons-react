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
		"content": `<style>.szha1du2n {
  fill: currentColor;
  d: path("M7.923 15.616V7.923h9.693v7.693zM3 19v-1h17V5h1v14z");
}
</style><path class="szha1du2n"/>`,
		"fallback": "material-symbols-light:picture-in-picture-medium-sharp",
	});
}

export default Component;
