import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft9lsfbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft9lsfbru"/>`,
		"fallback": "vadivam:volume-off",
	});
}

export default Component;
