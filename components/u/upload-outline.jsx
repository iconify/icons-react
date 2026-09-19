import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vomvm8bsb.css';
import '../../css/z/zfh2tob_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="upload-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="vomvm8bsb"/><path class="zfh2tob_r"/></g></g>`,
		"fallback": "cuida:upload-outline",
	});
}

export default Component;
