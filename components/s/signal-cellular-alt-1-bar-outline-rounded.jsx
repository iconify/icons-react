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
		"content": `<style>.v39qqo3sl {
  fill: currentColor;
  d: path("M6.236 18.765Q6 18.529 6 18.192v-2.384q0-.337.236-.572Q6.47 15 6.808 15t.572.236q.236.235.236.572v2.384q0 .337-.236.573T6.808 19t-.572-.236");
}
</style><path class="v39qqo3sl"/>`,
		"fallback": "material-symbols-light:signal-cellular-alt-1-bar-outline-rounded",
	});
}

export default Component;
