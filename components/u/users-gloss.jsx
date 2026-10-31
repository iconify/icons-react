import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fh3b4jb7y.css';
import '../../css/l/l83ns1xjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fh3b4jb7y wm-k"/><path class="l83ns1xjn wm-a"/></g>`,
		"fallback": "withicons:users-gloss",
	});
}

export default Component;
