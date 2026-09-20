import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ahsxa6g.css';
import '../../css/h/h-uptbcqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ahsxa6g"/><path class="h-uptbcqa"/>`,
		"fallback": "stash:signout-alt",
	});
}

export default Component;
