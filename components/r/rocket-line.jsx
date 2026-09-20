import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd-l39ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd-l39ban"/>`,
		"fallback": "si:rocket-line",
	});
}

export default Component;
