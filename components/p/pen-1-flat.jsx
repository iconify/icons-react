import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/klnwbrfki.css';
import '../../css/m/m7z48-80q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="klnwbrfki"/><path class="m7z48-80q"/></g>`,
		"fallback": "streamline-sharp-color:pen-1-flat",
	});
}

export default Component;
