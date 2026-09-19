import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-nchcxv.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/m/mukg8ab-m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq-nchcxv"/><circle class="dlp7nstpk"/><path class="mukg8ab-m"/>`,
		"fallback": "carbon:object-storage-alt",
	});
}

export default Component;
