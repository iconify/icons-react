import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sesk9obml.css';
import '../../css/y/yj--4g4yt.css';
import '../../css/j/jp5ylh46d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sesk9obml"/><path class="yj--4g4yt"/><path class="jp5ylh46d"/></g>`,
		"fallback": "pepicons:no-entry-print",
	});
}

export default Component;
