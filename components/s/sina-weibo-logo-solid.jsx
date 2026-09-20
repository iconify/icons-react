import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smpw6-uka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smpw6-uka"/>`,
		"fallback": "streamline-logos:sina-weibo-logo-solid",
	});
}

export default Component;
