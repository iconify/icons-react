import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga065kb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga065kb_p"/>`,
		"fallback": "token:tkn",
	});
}

export default Component;
