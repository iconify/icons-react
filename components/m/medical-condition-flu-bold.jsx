import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg2knfbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg2knfbok"/>`,
		"fallback": "streamline-ultimate:medical-condition-flu-bold",
	});
}

export default Component;
