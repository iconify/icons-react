import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_gz97l3s.css';
import '../../css/y/yn8-hpb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_gz97l3s"/><path class="yn8-hpb9j"/>`,
		"fallback": "uim:rocket",
	});
}

export default Component;
