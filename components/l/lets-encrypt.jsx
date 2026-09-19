import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tav496pqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tav496pqt"/>`,
		"fallback": "cib:lets-encrypt",
	});
}

export default Component;
