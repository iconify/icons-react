import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a347t-u9l.css';
import '../../css/g/ggsnfjbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a347t-u9l"/><path class="ggsnfjbnm"/></g>`,
		"fallback": "streamline-sharp-color:share-code-flat",
	});
}

export default Component;
