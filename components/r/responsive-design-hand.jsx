import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7kk0pbfc.css';
import '../../css/s/s43gu1b2k.css';
import '../../css/k/kq3qq5bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g7kk0pbfc"/><path class="s43gu1b2k"/><path class="kq3qq5bpc"/></g>`,
		"fallback": "streamline-freehand-color:responsive-design-hand",
	});
}

export default Component;
