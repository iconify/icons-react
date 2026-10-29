import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m87ck961u.css';
import '../../css/d/d1brjbccy.css';
import '../../css/d/d-xbejb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m87ck961u"/><path class="d1brjbccy"/><path class="d-xbejb9o"/>`,
		"fallback": "withicons-bauhaus:music-note",
	});
}

export default Component;
