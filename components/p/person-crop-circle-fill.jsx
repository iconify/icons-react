import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue493ubff.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue493ubff"/>`,
		"fallback": "f7:person-crop-circle-fill",
	});
}

export default Component;
