import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd22x-bgq.css';
import '../../css/p/phq_ikbmf.css';
import '../../css/n/nnodtjbab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd22x-bgq"/><path class="phq_ikbmf"/><path class="nnodtjbab"/></g>`,
		"fallback": "streamline-flex-color:tooth",
	});
}

export default Component;
