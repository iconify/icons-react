import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t7qd88dkz.css';
import '../../css/e/en9myornt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t7qd88dkz"/><path class="en9myornt"/></g>`,
		"fallback": "streamline-sharp-color:phone-personal-hotspot-flat",
	});
}

export default Component;
