import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpb0-dwzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpb0-dwzz"/>`,
		"fallback": "tdesign:korean-rectangle-filled",
	});
}

export default Component;
