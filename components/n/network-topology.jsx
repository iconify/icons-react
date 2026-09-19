import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jily80biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jily80biv"/>`,
		"fallback": "gcp:network-topology",
	});
}

export default Component;
