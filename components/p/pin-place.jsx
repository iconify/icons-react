import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ajbf_2b5w.css';
import '../../css/r/rd-2yob2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ajbf_2b5w"/><path class="rd-2yob2c"/></g>`,
		"fallback": "stash:pin-place",
	});
}

export default Component;
