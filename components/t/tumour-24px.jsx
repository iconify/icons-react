import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f67187bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f67187bhc"/>`,
		"fallback": "healthicons:tumour-24px",
	});
}

export default Component;
