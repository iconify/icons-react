import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsb_qgbau.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsb_qgbau"/>`,
		"fallback": "dinkie-icons:language-greek",
	});
}

export default Component;
