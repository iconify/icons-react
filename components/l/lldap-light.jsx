import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk_3vtbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk_3vtbzl"/>`,
		"fallback": "selfhst:lldap-light",
	});
}

export default Component;
