import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srlmpebxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srlmpebxg"/>`,
		"fallback": "ci:thin-long-02-up",
	});
}

export default Component;
