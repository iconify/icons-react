import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z7lun7c3s.css';
import '../../css/t/t9tdftoxw.css';
import '../../css/p/pc315qklg.css';
import '../../css/x/xtfu6-q5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z7lun7c3s"/><path class="t9tdftoxw"/><path class="pc315qklg"/><path class="xtfu6-q5h"/></g>`,
		"fallback": "streamline-freehand:print-text",
	});
}

export default Component;
