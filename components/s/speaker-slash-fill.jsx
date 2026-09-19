import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iac53iaiu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iac53iaiu"/>`,
		"fallback": "f7:speaker-slash-fill",
	});
}

export default Component;
