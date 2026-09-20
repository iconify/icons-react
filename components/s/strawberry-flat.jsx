import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umviyv4zn.css';
import '../../css/t/tw7rmdbsw.css';
import '../../css/e/e78k1_b5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umviyv4zn"/><path clip-rule="evenodd" class="tw7rmdbsw"/><path clip-rule="evenodd" class="e78k1_b5q"/></g>`,
		"fallback": "streamline-plump-color:strawberry-flat",
	});
}

export default Component;
