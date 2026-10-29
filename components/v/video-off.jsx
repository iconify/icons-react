import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-sn1pm9k.css';
import '../../css/w/w89bx5biq.css';
import '../../css/m/muj9u_23o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-sn1pm9k wm-k"/><path class="w89bx5biq wm-a"/><path class="muj9u_23o wm-s"/>`,
		"fallback": "withicons-bauhaus:video-off",
	});
}

export default Component;
