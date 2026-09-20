import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd8k0c7fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd8k0c7fk"/>`,
		"fallback": "material-icon-theme:payload",
	});
}

export default Component;
