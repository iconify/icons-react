import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5vlh53qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5vlh53qm"/>`,
		"fallback": "material-icon-theme:semgrep",
	});
}

export default Component;
