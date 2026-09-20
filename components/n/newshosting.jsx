import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijb908brc.css';
import '../../css/t/tucrirb7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ijb908brc"/><path class="tucrirb7e"/>`,
		"fallback": "selfhst:newshosting",
	});
}

export default Component;
