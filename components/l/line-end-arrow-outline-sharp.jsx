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
		"content": `<style>.v1lxv29ft {
  fill: currentColor;
  d: path("M12.192 16.827V12.5H3.077v-1h9.115V7.173L19.788 12zm1-1.823L17.91 12l-4.718-3.004zm0-3.004");
}
</style><path class="v1lxv29ft"/>`,
		"fallback": "material-symbols-light:line-end-arrow-outline-sharp",
	});
}

export default Component;
