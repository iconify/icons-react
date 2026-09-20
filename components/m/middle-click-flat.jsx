import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjsn85bdr.css';
import '../../css/m/m0019xbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjsn85bdr"/><path class="m0019xbyw"/></g>`,
		"fallback": "streamline-sharp-color:middle-click-flat",
	});
}

export default Component;
