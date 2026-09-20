import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckrbjib3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ckrbjib3f"/>`,
		"fallback": "token:man",
	});
}

export default Component;
