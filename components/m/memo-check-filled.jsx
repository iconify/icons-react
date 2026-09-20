import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h92kx4byy.css';
import '../../css/i/i3c9vd17a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h92kx4byy"/><path class="i3c9vd17a"/></g>`,
		"fallback": "reicon:memo-check-filled",
	});
}

export default Component;
