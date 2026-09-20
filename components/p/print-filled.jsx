import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ds1qb9a.css';
import '../../css/m/m45_auk8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ds1qb9a"/><path class="m45_auk8q"/>`,
		"fallback": "tdesign:print-filled",
	});
}

export default Component;
