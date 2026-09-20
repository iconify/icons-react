import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa5kl5bks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa5kl5bks"/>`,
		"fallback": "material-icon-theme:powershell",
	});
}

export default Component;
