import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kb-1x_bpv {
  fill: none;
  stroke: currentColor;
  d: path("M18.084 29.396a2.486 2.486 0 1 0 1.772-4.646L6.1 19.506a2.486 2.486 0 1 1 1.772-4.646l13.754 5.244a2.486 2.486 0 1 0 1.772-4.647l-3.788-1.444a2.486 2.486 0 1 1 1.771-4.646l14.112 5.38c6.415 2.446 9.633 9.63 7.187 16.044s-9.629 9.633-16.044 7.187l-14.112-5.38a2.486 2.486 0 1 1 1.772-4.646z");
}
</style><path class="kb-1x_bpv"/>`,
		"fallback": "arcticons:strike",
	});
}

export default Component;
