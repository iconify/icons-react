import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfrkt8eii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfrkt8eii"/>`,
		"fallback": "eos-icons:network-file-system",
	});
}

export default Component;
