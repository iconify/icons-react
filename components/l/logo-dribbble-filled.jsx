import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo7mz2bml.css';
import '../../css/n/nuz4awhaa.css';
import '../../css/a/a6uabbbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo7mz2bml"/><path class="nuz4awhaa"/><path class="a6uabbbrn"/>`,
		"fallback": "tdesign:logo-dribbble-filled",
	});
}

export default Component;
