import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/prksecbbg.css';
import '../../css/p/pxol5i92i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="prksecbbg"/><path class="pxol5i92i"/></g>`,
		"fallback": "streamline-sharp-color:politics-vote-2-flat",
	});
}

export default Component;
