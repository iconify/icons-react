import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncykuk6wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncykuk6wt"/>`,
		"fallback": "heroicons:speaker-wave",
	});
}

export default Component;
