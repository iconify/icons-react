import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxq6zy91w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxq6zy91w"/>`,
		"fallback": "withicons:keyboard-gloss",
	});
}

export default Component;
