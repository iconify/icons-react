import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg841gb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg841gb9d"/>`,
		"fallback": "simple-icons:microsoftsharepoint",
	});
}

export default Component;
