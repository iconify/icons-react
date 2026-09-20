import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1_vptuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cc1_vptuz"/>`,
		"fallback": "streamline-sharp:toilet-paper-solid",
	});
}

export default Component;
