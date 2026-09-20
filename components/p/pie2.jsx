import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i8stytxwg.css';
import '../../css/b/b7u3yrvrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i8stytxwg"/><path class="b7u3yrvrb"/></g>`,
		"fallback": "reicon:pie2",
	});
}

export default Component;
