import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1w7ufbzf.css';
import '../../css/w/w89phjbdg.css';
import '../../css/e/e8s0ikesh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1w7ufbzf"/><path clip-rule="evenodd" class="w89phjbdg"/><path class="e8s0ikesh"/></g>`,
		"fallback": "streamline-plump-color:memes-comment-reply-flat",
	});
}

export default Component;
