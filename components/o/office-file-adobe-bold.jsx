import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/varr8acvu.css';
import '../../css/n/nk4n3vbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="varr8acvu"/><path class="nk4n3vbeu"/>`,
		"fallback": "streamline-ultimate:office-file-adobe-bold",
	});
}

export default Component;
