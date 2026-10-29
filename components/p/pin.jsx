import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9go7hbsg.css';
import '../../css/v/vaz59h5au.css';
import '../../css/q/q22873scb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9go7hbsg wm-a"/><path class="vaz59h5au wm-k"/><path class="q22873scb wm-k"/>`,
		"fallback": "withicons-bauhaus:pin",
	});
}

export default Component;
