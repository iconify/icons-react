import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mavdskbnx.css';
import '../../css/d/dke65eb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mavdskbnx"/><path class="dke65eb8l"/>`,
		"fallback": "boxicons:torch",
	});
}

export default Component;
