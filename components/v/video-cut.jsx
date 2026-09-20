import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq-hce4iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq-hce4iv"/>`,
		"fallback": "reicon:video-cut",
	});
}

export default Component;
