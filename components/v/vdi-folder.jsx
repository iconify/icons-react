import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3uc9rd7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3uc9rd7k"/>`,
		"fallback": "ix:vdi-folder",
	});
}

export default Component;
