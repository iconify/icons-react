import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhb9inq-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhb9inq-w"/>`,
		"fallback": "streamline-ultimate:ranking-people-first",
	});
}

export default Component;
