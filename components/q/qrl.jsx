import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agas_nbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agas_nbbp"/>`,
		"fallback": "token:qrl",
	});
}

export default Component;
