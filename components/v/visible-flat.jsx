import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m17icjbua.css';
import '../../css/u/ukjq6zhnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m17icjbua"/><path class="ukjq6zhnz"/></g>`,
		"fallback": "streamline-sharp-color:visible-flat",
	});
}

export default Component;
