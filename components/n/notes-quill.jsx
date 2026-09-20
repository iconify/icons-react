import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kyoivpb1v.css';
import '../../css/y/y84sanbev.css';
import '../../css/s/s_ax9mbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kyoivpb1v"/><path class="y84sanbev"/><path class="s_ax9mbxh"/></g>`,
		"fallback": "streamline-freehand-color:notes-quill",
	});
}

export default Component;
