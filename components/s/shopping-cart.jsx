import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2faccfl.css';
import '../../css/u/u7k7a9bky.css';
import '../../css/d/d12rxmbac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qy2faccfl"/><circle class="u7k7a9bky"/><path class="d12rxmbac"/>`,
		"fallback": "carbon:shopping-cart",
	});
}

export default Component;
