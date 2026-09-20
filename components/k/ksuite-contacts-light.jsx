import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgangomwz.css';
import '../../css/d/d1ft4ebeo.css';
import '../../css/d/dn6qqpqrd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgangomwz"/><path class="d1ft4ebeo"/><path class="dn6qqpqrd"/>`,
		"fallback": "selfhst:ksuite-contacts-light",
	});
}

export default Component;
