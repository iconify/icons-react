import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rlz4gzoop.css';
import '../../css/b/b45ce9wja.css';
import '../../css/n/njgrfi92d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rlz4gzoop"/><path class="b45ce9wja wm-a"/><path class="njgrfi92d wm-s"/></g>`,
		"fallback": "withicons:rakhi-solid",
	});
}

export default Component;
