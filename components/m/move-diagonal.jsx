import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkkd7rb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkkd7rb2l"/>`,
		"fallback": "vadivam:move-diagonal",
	});
}

export default Component;
