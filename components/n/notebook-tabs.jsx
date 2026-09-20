import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f82tjsn5b.css';
import '../../css/g/gurl2ypet.css';
import '../../css/g/gs2m1gbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f82tjsn5b"/><rect class="gurl2ypet"/><path class="gs2m1gbdp"/></g>`,
		"fallback": "lucide:notebook-tabs",
	});
}

export default Component;
