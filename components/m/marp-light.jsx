import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7ygtfbzr.css';
import '../../css/c/cqb6abcqd.css';
import '../../css/d/dcbk0ez8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7ygtfbzr"/><path class="cqb6abcqd"/><path class="dcbk0ez8n"/>`,
		"fallback": "selfhst:marp-light",
	});
}

export default Component;
