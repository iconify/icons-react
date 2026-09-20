import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byvv0d4br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byvv0d4br"/>`,
		"fallback": "simple-icons:simpleiconscdn",
	});
}

export default Component;
