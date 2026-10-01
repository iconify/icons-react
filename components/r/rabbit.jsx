import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvt0s3njn.css';
import '../../css/v/vmr_zhb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvt0s3njn"/><path class="vmr_zhb1h"/>`,
		"fallback": "token:rabbit",
	});
}

export default Component;
