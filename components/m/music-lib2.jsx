import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tvbvefb8z.css';
import '../../css/s/sg7kuub-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tvbvefb8z"/><path class="sg7kuub-f"/></g>`,
		"fallback": "reicon:music-lib2",
	});
}

export default Component;
