import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqsj_wbmh.css';
import '../../css/a/a6f9j-74o.css';
import '../../css/k/k_-hq8bfm.css';
import '../../css/l/l88ep297x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqsj_wbmh"/><path class="a6f9j-74o"/><path class="k_-hq8bfm"/><path class="l88ep297x"/>`,
		"fallback": "withicons-bauhaus:lamp",
	});
}

export default Component;
