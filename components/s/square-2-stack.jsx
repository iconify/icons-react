import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al0ofebsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al0ofebsh"/>`,
		"fallback": "heroicons-outline:square-2-stack",
	});
}

export default Component;
