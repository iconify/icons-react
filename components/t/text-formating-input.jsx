import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sf1zqmbeg.css';
import '../../css/p/pi8aa2aix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sf1zqmbeg"/><path class="pi8aa2aix"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-input",
	});
}

export default Component;
