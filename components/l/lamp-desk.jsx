import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo488-cjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo488-cjr"/>`,
		"fallback": "withicons:lamp-desk",
	});
}

export default Component;
