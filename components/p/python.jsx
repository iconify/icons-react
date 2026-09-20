import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrbwxfd2d.css';
import '../../css/h/h697m9a0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrbwxfd2d"/><path class="h697m9a0o"/>`,
		"fallback": "material-icon-theme:python",
	});
}

export default Component;
