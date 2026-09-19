import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv21hpb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv21hpb-x"/>`,
		"fallback": "boxicons:size-warp-filled",
	});
}

export default Component;
