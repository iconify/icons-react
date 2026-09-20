import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtmtpb1fz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtmtpb1fz"/>`,
		"fallback": "selfhst:logseq-light",
	});
}

export default Component;
