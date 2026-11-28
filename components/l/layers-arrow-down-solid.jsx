import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdze-ty3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdze-ty3k"/>`,
		"fallback": "iconaut:layers-arrow-down-solid",
	});
}

export default Component;
