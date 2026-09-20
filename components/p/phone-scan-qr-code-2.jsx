import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz40oqe3o.css';
import '../../css/u/umi-nhb8c.css';
import '../../css/n/ntuki9b4l.css';
import '../../css/n/nxyt7wepj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz40oqe3o"/><path class="umi-nhb8c"/><path class="ntuki9b4l"/><path class="nxyt7wepj"/>`,
		"fallback": "streamline-pixel:phone-scan-qr-code-2",
	});
}

export default Component;
