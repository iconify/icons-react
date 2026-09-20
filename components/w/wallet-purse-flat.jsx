import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ky0sg0bgm.css';
import '../../css/d/dzq-5nb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ky0sg0bgm"/><path class="dzq-5nb2u"/></g>`,
		"fallback": "streamline-sharp-color:wallet-purse-flat",
	});
}

export default Component;
