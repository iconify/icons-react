import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok2z6czne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok2z6czne"/>`,
		"fallback": "noviair-light:unlock-x",
	});
}

export default Component;
