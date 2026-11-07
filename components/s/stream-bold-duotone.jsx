import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn_f1tn5f.css';
import '../../css/d/ddsunemne.css';
import '../../css/h/htpdpeg8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn_f1tn5f"/><path class="ddsunemne"/><path class="htpdpeg8u"/>`,
		"fallback": "solar:stream-bold-duotone",
	});
}

export default Component;
