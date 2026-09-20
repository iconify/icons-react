import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2s3-4b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2s3-4b7p"/>`,
		"fallback": "thesvg:ubiquiti",
	});
}

export default Component;
