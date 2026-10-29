import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8_c70p_x.css';
import '../../css/f/ftery2lwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8_c70p_x wm-k"/><path class="ftery2lwy wm-a"/>`,
		"fallback": "withicons-bauhaus:skip-back",
	});
}

export default Component;
