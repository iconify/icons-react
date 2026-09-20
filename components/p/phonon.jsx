import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jakgx-bvd.css';
import '../../css/j/jzt-i4bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jakgx-bvd"/><path class="jzt-i4bdp"/>`,
		"fallback": "token:phonon",
	});
}

export default Component;
