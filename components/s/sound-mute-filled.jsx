import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uffnlp-lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uffnlp-lf"/>`,
		"fallback": "tdesign:sound-mute-filled",
	});
}

export default Component;
