import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h92kx4byy.css';
import '../../css/a/aaz0_cs4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h92kx4byy"/><path class="aaz0_cs4m"/></g>`,
		"fallback": "reicon:memo-minus-filled",
	});
}

export default Component;
