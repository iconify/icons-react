import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l1b1fqf8u.css';
import '../../css/d/duuk5qoxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l1b1fqf8u"/><path class="duuk5qoxe"/></g>`,
		"fallback": "streamline-sharp-color:signature-flat",
	});
}

export default Component;
