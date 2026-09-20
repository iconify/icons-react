import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omop2lbmb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="omop2lbmb"/>`,
		"fallback": "streamline-flex:pictures-folder-memories-solid",
	});
}

export default Component;
