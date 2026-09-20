import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt-9dzk5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt-9dzk5f"/>`,
		"fallback": "material-icon-theme:powerpoint",
	});
}

export default Component;
