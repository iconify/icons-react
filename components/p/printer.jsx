import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc2xcivwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc2xcivwg"/>`,
		"fallback": "vadivam:printer",
	});
}

export default Component;
