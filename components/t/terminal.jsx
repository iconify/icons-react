import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiqd9zd2t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiqd9zd2t"/>`,
		"fallback": "icomoon-free:terminal",
	});
}

export default Component;
