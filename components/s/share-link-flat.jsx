import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s41cgixbf.css';
import '../../css/j/juc_v0sko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s41cgixbf"/><path class="juc_v0sko"/></g>`,
		"fallback": "streamline-sharp-color:share-link-flat",
	});
}

export default Component;
