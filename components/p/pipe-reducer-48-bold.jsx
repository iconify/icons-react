import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvlu12bfl.css';
import '../../css/k/kqfh3ccjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvlu12bfl"/><path class="kqfh3ccjg"/>`,
		"fallback": "energy-icons:pipe-reducer-48-bold",
	});
}

export default Component;
