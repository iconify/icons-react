import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzcn2g39y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzcn2g39y"/>`,
		"fallback": "tabler:video",
	});
}

export default Component;
