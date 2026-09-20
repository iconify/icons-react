import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/td0k3ab2h.css';
import '../../css/t/tgz5u5b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="td0k3ab2h"/><path class="tgz5u5b7x"/></g>`,
		"fallback": "reicon:video-lib",
	});
}

export default Component;
