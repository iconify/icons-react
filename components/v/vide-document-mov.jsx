import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq9mwsbiz.css';
import '../../css/n/n63uy_v8q.css';
import '../../css/l/lwxbotvsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq9mwsbiz"/><path class="n63uy_v8q"/><path class="lwxbotvsb"/>`,
		"fallback": "streamline-freehand:vide-document-mov",
	});
}

export default Component;
