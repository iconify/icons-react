import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/akc3qybnf.css';
import '../../css/k/k2i346xzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="akc3qybnf"/><path class="k2i346xzp"/></g>`,
		"fallback": "grommet-icons:star-half",
	});
}

export default Component;
