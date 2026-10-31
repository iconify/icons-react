import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jhp4wknli.css';
import '../../css/j/jbd_klbyv.css';
import '../../css/v/v8npkhbao.css';
import '../../css/e/e4piyhorf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jhp4wknli wm-shadow"/><path class="jbd_klbyv wm-shadow"/><path class="v8npkhbao"/><path class="e4piyhorf"/></g>`,
		"fallback": "withicons-brutal:rabbit",
	});
}

export default Component;
