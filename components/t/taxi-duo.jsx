import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/b/bomrg4edb.css';
import '../../css/o/ovwzzpbbb.css';
import '../../css/g/gb9hqxvkr.css';
import '../../css/u/u6n2yk8wc.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="bomrg4edb"/><path class="ovwzzpbbb"/><path class="gb9hqxvkr"/><path class="u6n2yk8wc"/></g>`,
		"fallback": "streamline-stickies-color:taxi-duo",
	});
}

export default Component;
