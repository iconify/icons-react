import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84gw5bsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w84gw5bsn"/>`,
		"fallback": "selfhst:mysql-light",
	});
}

export default Component;
