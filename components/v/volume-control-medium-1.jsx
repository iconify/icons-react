import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmgj-ltpl.css';
import '../../css/m/mp9eqybsi.css';
import '../../css/c/c0-nyjt-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmgj-ltpl"/><path class="mp9eqybsi"/><path class="c0-nyjt-p"/></g>`,
		"fallback": "streamline-freehand-color:volume-control-medium-1",
	});
}

export default Component;
