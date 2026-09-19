import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roz0gr1al.css';
import '../../css/b/bti7b4bab.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="roz0gr1al"/><path class="bti7b4bab"/></g>`,
		"fallback": "fad:logo-audacity",
	});
}

export default Component;
