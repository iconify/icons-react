import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aff850a4i.css';
import '../../css/t/tbz_4tblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aff850a4i"/><path class="tbz_4tblp"/></g>`,
		"fallback": "reicon:routing2",
	});
}

export default Component;
