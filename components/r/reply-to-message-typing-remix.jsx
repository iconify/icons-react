import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq17i1_qo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq17i1_qo"/>`,
		"fallback": "streamline-plump:reply-to-message-typing-remix",
	});
}

export default Component;
