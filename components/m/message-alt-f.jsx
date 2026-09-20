import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbly2j_2l.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbly2j_2l"/>`,
		"fallback": "jam:message-alt-f",
	});
}

export default Component;
