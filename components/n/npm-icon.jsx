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
		"content": `<style>.oxq7w1buj {
  fill: var(--svg-color--c12127, #c12127);
  d: path("M0 256V0h256v256z");
}

.tvwpl1bgp {
  fill: var(--svg-color--fff, #fff);
  d: path("M48 48h160v160h-32V80h-48v128H48z");
}
</style><path class="oxq7w1buj"/><path class="tvwpl1bgp"/>`,
		"fallback": "logos:npm-icon",
	});
}

export default Component;
