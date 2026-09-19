import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ru7780bjq.css';
import '../../css/z/zmoqu4uqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="trending-down-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ru7780bjq"/><path class="zmoqu4uqb"/></g></g>`,
		"fallback": "cuida:trending-down-outline",
	});
}

export default Component;
