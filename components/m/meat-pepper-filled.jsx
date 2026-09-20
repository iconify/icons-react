import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjn2x4nmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjn2x4nmf"/>`,
		"fallback": "tdesign:meat-pepper-filled",
	});
}

export default Component;
