import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjqb15sao.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjqb15sao"/>`,
		"fallback": "icons8:lock",
	});
}

export default Component;
