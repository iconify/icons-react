import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/v/vpfegd3_c.css';
import '../../css/g/gqphqq4yd.css';
import '../../css/d/dilf8cbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="vpfegd3_c"/><path class="gqphqq4yd"/><path class="dilf8cbbo"/>`,
		"fallback": "fontisto:neutral",
	});
}

export default Component;
