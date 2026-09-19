import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/d/dzr6cgbld.css';
import '../../css/p/pg7ja1biu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="dzr6cgbld"/><path class="pg7ja1biu"/></g>`,
		"fallback": "gala:video",
	});
}

export default Component;
