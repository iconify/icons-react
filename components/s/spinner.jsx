import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsi2ndb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsi2ndb8p"/>`,
		"fallback": "proicons:spinner",
	});
}

export default Component;
