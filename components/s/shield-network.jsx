import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eeesclp5a.css';
import '../../css/w/w4nyhcboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eeesclp5a"/><path class="w4nyhcboh"/></g>`,
		"fallback": "reicon:shield-network",
	});
}

export default Component;
