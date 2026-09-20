import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfp7g0-qw.css';
import '../../css/k/kczpjcm2l.css';
import '../../css/y/yiyr5hbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfp7g0-qw"/><path class="kczpjcm2l"/><path class="yiyr5hbvv"/></g>`,
		"fallback": "streamline-freehand:microphone",
	});
}

export default Component;
