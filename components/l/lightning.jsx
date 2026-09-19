import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qezs7ccgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qezs7ccgp"/>`,
		"fallback": "icon-park:lightning",
	});
}

export default Component;
