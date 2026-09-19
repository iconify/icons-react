import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glvsanvuf.css';
import '../../css/a/aky8nga1z.css';
import '../../css/i/i7d1g526i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="upload-cloud-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="glvsanvuf"/><path class="aky8nga1z"/><path class="i7d1g526i"/></g></g>`,
		"fallback": "cuida:upload-cloud-outline",
	});
}

export default Component;
