import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzj1nzb2x.css';
import '../../css/v/vwu041i_f.css';
import '../../css/h/h0cxnwb4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzj1nzb2x"/><path class="vwu041i_f"/><path class="h0cxnwb4j"/>`,
		"fallback": "streamline-pixel:photography-file-picture",
	});
}

export default Component;
