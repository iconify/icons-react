import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxayh14fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxayh14fq"/>`,
		"fallback": "bx:refresh",
	});
}

export default Component;
