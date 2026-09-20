import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk858jx6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hk858jx6m"/>`,
		"fallback": "prime:objects-column",
	});
}

export default Component;
