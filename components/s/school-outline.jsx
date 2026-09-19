import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s12qakbkj.css';
import '../../css/q/q6hvgntet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s12qakbkj"/><path class="q6hvgntet"/>`,
		"fallback": "ion:school-outline",
	});
}

export default Component;
