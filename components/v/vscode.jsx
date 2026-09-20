import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shmltxb2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shmltxb2s"/>`,
		"fallback": "material-icon-theme:vscode",
	});
}

export default Component;
