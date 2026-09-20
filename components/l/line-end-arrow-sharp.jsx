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
		"content": `<style>.ueoq-jg_k {
  fill: currentColor;
  d: path("M12.192 16.827V12.5H3.077v-1h9.115V7.173L19.788 12z");
}
</style><path class="ueoq-jg_k"/>`,
		"fallback": "material-symbols-light:line-end-arrow-sharp",
	});
}

export default Component;
