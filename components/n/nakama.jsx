import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ae6vn1y.css';
import '../../css/h/h53yl6f8n.css';
import '../../css/j/jdgizublx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ae6vn1y"/><path class="h53yl6f8n"/><path class="jdgizublx"/>`,
		"fallback": "selfhst:nakama",
	});
}

export default Component;
