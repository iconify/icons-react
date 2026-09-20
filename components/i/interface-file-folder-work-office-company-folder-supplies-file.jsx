import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nis8-pwmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nis8-pwmr"/>`,
		"fallback": "streamline:interface-file-folder-work-office-company-folder-supplies-file",
	});
}

export default Component;
