import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imdlfp1es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imdlfp1es"/>`,
		"fallback": "boxicons:sneaker-filled",
	});
}

export default Component;
