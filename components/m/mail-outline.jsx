import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3b-_98gh.css';
import '../../css/g/gmfx_9bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mail-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="t3b-_98gh"/><path class="gmfx_9bqe"/></g></g>`,
		"fallback": "cuida:mail-outline",
	});
}

export default Component;
