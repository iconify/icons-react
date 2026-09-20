import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw-7wb.css';
import '../../css/i/iw1iew.css';
import '../../css/a/ahcaho.css';
import '../../css/s/so-from-50.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw-7wb iw1iew"/><path class="ahcaho iw1iew"/>`,
		"fallback": "line-md:laptop-filled",
	});
}

export default Component;
