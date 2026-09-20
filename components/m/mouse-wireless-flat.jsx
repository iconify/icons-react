import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wwdoncb5c.css';
import '../../css/c/cpdmh-b7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wwdoncb5c"/><path class="cpdmh-b7c"/></g>`,
		"fallback": "streamline-color:mouse-wireless-flat",
	});
}

export default Component;
