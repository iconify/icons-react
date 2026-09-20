import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfs6bob9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hfs6bob9c"/>`,
		"fallback": "streamline-logos:virustotal-logo-block",
	});
}

export default Component;
