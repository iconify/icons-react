import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeupyjb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeupyjb7q"/>`,
		"fallback": "tabler:package",
	});
}

export default Component;
