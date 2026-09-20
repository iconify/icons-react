import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puw0kjb1k.css';
import '../../css/g/ginn57b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="puw0kjb1k"/><path class="ginn57b6g"/>`,
		"fallback": "solar:rounded-magnifer-bug-bold",
	});
}

export default Component;
