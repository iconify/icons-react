import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okt_qdxsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okt_qdxsd"/>`,
		"fallback": "ix:rocket-filled",
	});
}

export default Component;
