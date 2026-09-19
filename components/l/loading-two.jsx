import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k179mzbxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k179mzbxo"/>`,
		"fallback": "icon-park-outline:loading-two",
	});
}

export default Component;
