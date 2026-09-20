import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wghzu7b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wghzu7b6d"/>`,
		"fallback": "tabler:spider-filled",
	});
}

export default Component;
