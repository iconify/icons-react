import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kat5qpbam.css';
import '../../css/z/z7mnfgbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kat5qpbam"/><path class="z7mnfgbqx"/></g>`,
		"fallback": "basil:settings-alt-outline",
	});
}

export default Component;
