import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-_s3dl-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-_s3dl-d"/>`,
		"fallback": "thesvg:juke",
	});
}

export default Component;
