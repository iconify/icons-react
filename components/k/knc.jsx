import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l78w82b4c.css';
import '../../css/k/kt_y30dqr.css';
import '../../css/a/ajffsljgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l78w82b4c"/><path class="kt_y30dqr"/><path class="ajffsljgz"/>`,
		"fallback": "token:knc",
	});
}

export default Component;
