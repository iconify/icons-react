import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg54b2byp.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg54b2byp"/>`,
		"fallback": "wi:moon-alt-waning-gibbous-4",
	});
}

export default Component;
