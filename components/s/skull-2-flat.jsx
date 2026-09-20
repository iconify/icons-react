import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nb1twfhcp.css';
import '../../css/e/et-gdzbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nb1twfhcp"/><path class="et-gdzbcm"/></g>`,
		"fallback": "streamline-sharp-color:skull-2-flat",
	});
}

export default Component;
