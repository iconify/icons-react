import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6n_93bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6n_93bla"/>`,
		"fallback": "lets-icons:transfer-long-right-light",
	});
}

export default Component;
