import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpfbajuoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpfbajuoi"/>`,
		"fallback": "tabler:layout-bottombar-filled",
	});
}

export default Component;
