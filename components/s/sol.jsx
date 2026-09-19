import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnf-kcvqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnf-kcvqw"/>`,
		"fallback": "cryptocurrency:sol",
	});
}

export default Component;
