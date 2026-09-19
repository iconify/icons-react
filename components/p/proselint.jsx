import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5j6imbpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5j6imbpa"/>`,
		"fallback": "file-icons:proselint",
	});
}

export default Component;
