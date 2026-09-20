import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvg90nb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvg90nb4x"/>`,
		"fallback": "proicons:pulse",
	});
}

export default Component;
