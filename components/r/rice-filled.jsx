import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm95__uzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm95__uzt"/>`,
		"fallback": "tdesign:rice-filled",
	});
}

export default Component;
