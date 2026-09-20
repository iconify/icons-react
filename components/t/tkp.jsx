import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu37puwpe.css';
import '../../css/n/nsv122b2e.css';
import '../../css/z/zcrtkru6i.css';
import '../../css/d/dtt48bbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu37puwpe"/><path class="nsv122b2e"/><path class="zcrtkru6i"/><path class="dtt48bbaj"/>`,
		"fallback": "token:tkp",
	});
}

export default Component;
