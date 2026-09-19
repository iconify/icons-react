import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvq6_6b7x.css';
import '../../css/q/qxsh5ebmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer dvq6_6b7x"/><path class="duoicon-secondary-layer qxsh5ebmo"/>`,
		"fallback": "duo-icons:smartwatch",
	});
}

export default Component;
