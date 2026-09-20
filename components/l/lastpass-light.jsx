import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_89v_x1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_89v_x1l"/>`,
		"fallback": "selfhst:lastpass-light",
	});
}

export default Component;
