import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v180uybxb.css';
import '../../css/g/g06052bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v180uybxb"/><path class="g06052bfr"/></g>`,
		"fallback": "streamline-sharp-color:typewriter-flat",
	});
}

export default Component;
