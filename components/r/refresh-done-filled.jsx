import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jsrzl-wng.css';
import '../../css/m/m8f5wpbom.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jsrzl-wng"/><path class="m8f5wpbom"/></g>`,
		"fallback": "lsicon:refresh-done-filled",
	});
}

export default Component;
