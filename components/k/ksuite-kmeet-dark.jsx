import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wufabxb2f.css';
import '../../css/h/hafkb4bxt.css';
import '../../css/c/cdjzimb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wufabxb2f"/><path class="hafkb4bxt"/><path class="cdjzimb7l"/>`,
		"fallback": "selfhst:ksuite-kmeet-dark",
	});
}

export default Component;
