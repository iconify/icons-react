import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d0c44qvfi.css';
import '../../css/t/tyb-udb1w.css';
import '../../css/o/ooqomeb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d0c44qvfi"/><path class="tyb-udb1w"/><path class="ooqomeb9g"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-lock",
	});
}

export default Component;
