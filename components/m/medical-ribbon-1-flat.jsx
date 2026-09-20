import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vytco_zjf.css';
import '../../css/o/oscixzmog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vytco_zjf"/><path class="oscixzmog"/></g>`,
		"fallback": "streamline-sharp-color:medical-ribbon-1-flat",
	});
}

export default Component;
