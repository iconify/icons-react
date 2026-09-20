import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nrs_s3b-j.css';
import '../../css/a/a2-6c9lfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nrs_s3b-j"/><path class="a2-6c9lfp"/></g>`,
		"fallback": "solar:screencast-2-line-duotone",
	});
}

export default Component;
