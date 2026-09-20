import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovu3qlb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovu3qlb7x"/>`,
		"fallback": "thesvg-color:streamlit",
	});
}

export default Component;
