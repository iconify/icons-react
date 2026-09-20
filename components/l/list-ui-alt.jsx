import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlr1md4hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlr1md4hf"/>`,
		"fallback": "uil:list-ui-alt",
	});
}

export default Component;
