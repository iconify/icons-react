import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u28_fdbqf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u28_fdbqf"/>`,
		"fallback": "fa7-brands:octopus-deploy",
	});
}

export default Component;
