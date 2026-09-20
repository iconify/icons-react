import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/li86n-rec.css';
import '../../css/m/mgbf99pgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="li86n-rec"/><path class="mgbf99pgg"/></g>`,
		"fallback": "streamline-freehand-color:unlock-circle",
	});
}

export default Component;
