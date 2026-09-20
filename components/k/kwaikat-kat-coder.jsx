import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y8075zbup.css';
import '../../css/g/gskvlohco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y8075zbup"/><path class="gskvlohco"/></g>`,
		"fallback": "thesvg:kwaikat-kat-coder",
	});
}

export default Component;
