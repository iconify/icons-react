import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-nchcxv.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/q/qe3jhfb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq-nchcxv"/><circle class="dlp7nstpk"/><path class="qe3jhfb4u"/>`,
		"fallback": "carbon:object-storage",
	});
}

export default Component;
