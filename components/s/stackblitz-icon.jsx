import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":368};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oynqdsb-h {
  fill: var(--svg-color--49a2f8, #49a2f8);
  d: path("M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z");
}
</style><path class="oynqdsb-h"/>`,
		"fallback": "logos:stackblitz-icon",
	});
}

export default Component;
