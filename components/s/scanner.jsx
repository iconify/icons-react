import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k2ie8jb8l.css';
import '../../css/s/svvboyblr.css';
import '../../css/q/qhkw6xb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k2ie8jb8l"/><path class="svvboyblr"/><path class="qhkw6xb9i"/></g>`,
		"fallback": "streamline-freehand-color:scanner",
	});
}

export default Component;
