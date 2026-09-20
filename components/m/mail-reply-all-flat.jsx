import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gsr17cbsu.css';
import '../../css/m/mljhs2reh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gsr17cbsu"/><path class="mljhs2reh"/></g>`,
		"fallback": "streamline-flex-color:mail-reply-all-flat",
	});
}

export default Component;
