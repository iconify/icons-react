import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vafcejo4j.css';
import '../../css/b/b4nk8cn1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vafcejo4j"/><path class="b4nk8cn1m"/></g>`,
		"fallback": "reicon:magnifier-filled",
	});
}

export default Component;
