import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dffxk9bmb.css';
import '../../css/u/u5p8o2bwt.css';
import '../../css/d/dlasa7b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dffxk9bmb"/><path class="u5p8o2bwt"/><path class="dlasa7b1r"/></g>`,
		"fallback": "streamline-logos:tencent-weiboing-logo",
	});
}

export default Component;
