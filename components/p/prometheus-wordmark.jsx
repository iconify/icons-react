import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aboskhb3q.css';
import '../../css/h/hie0ikbbu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aboskhb3q"/><path class="hie0ikbbu"/>`,
		"fallback": "devicon:prometheus-wordmark",
	});
}

export default Component;
