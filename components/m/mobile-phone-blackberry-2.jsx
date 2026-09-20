import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lg4kn8b7t.css';
import '../../css/p/pj2lo2bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lg4kn8b7t"/><path class="pj2lo2bfj"/></g>`,
		"fallback": "streamline-freehand-color:mobile-phone-blackberry-2",
	});
}

export default Component;
