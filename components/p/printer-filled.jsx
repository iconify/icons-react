import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8sovnz4j.css';
import '../../css/o/obpt3dxcu.css';
import '../../css/u/u97m_wqmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n8sovnz4j"/><path class="obpt3dxcu"/><path clip-rule="evenodd" class="u97m_wqmn"/></g>`,
		"fallback": "reicon:printer-filled",
	});
}

export default Component;
