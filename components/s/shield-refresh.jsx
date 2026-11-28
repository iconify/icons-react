import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj-8xcbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj-8xcbeh"/>`,
		"fallback": "noviair:shield-refresh",
	});
}

export default Component;
