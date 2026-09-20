import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybmdpybot.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/p/pogth7b8r.css';
import '../../css/s/s5gwvebwy.css';
import '../../css/z/zwjgx8kli.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybmdpybot"/><g class="kdz4acc8r"><path class="pogth7b8r"/><path class="s5gwvebwy"/><path class="zwjgx8kli"/></g>`,
		"fallback": "openmoji:teapot",
	});
}

export default Component;
