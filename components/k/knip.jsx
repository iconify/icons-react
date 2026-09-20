import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmcd7ibug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmcd7ibug"/>`,
		"fallback": "material-icon-theme:knip",
	});
}

export default Component;
