import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dgausnbiy.css';
import '../../css/x/xdnk-abcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dgausnbiy"/><path class="xdnk-abcb"/></g>`,
		"fallback": "streamline-sharp-color:smiley-shocked-flat",
	});
}

export default Component;
