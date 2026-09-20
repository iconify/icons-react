import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":233};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jq6gtxb6m {
  d: path("M128.1 0L0 232.153h256L128.1 0zm-10.876 46.875l93.256 171.943H22.559l94.665-171.943z");
  fill: var(--svg-color--000, #000);
}
</style><path class="jq6gtxb6m"/>`,
		"fallback": "logos:now",
	});
}

export default Component;
