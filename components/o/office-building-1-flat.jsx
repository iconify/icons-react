import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ghh5_0b2y.css';
import '../../css/w/w7ze481ko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ghh5_0b2y"/><path class="w7ze481ko"/></g>`,
		"fallback": "streamline-flex-color:office-building-1-flat",
	});
}

export default Component;
