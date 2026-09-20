import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bczigkb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bczigkb7j"/>`,
		"fallback": "ri:refresh-fill",
	});
}

export default Component;
