import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/l9wbs_y1i.css';
import '../../css/b/bjwamubhq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="l9wbs_y1i"/><path class="bjwamubhq"/></g>`,
		"fallback": "thesvg-color:openreplay-dark",
	});
}

export default Component;
