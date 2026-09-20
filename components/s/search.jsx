import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tvje48b7u.css';
import '../../css/n/n-s3_4imp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tvje48b7u"/><circle class="n-s3_4imp"/></g>`,
		"fallback": "lucide:search",
	});
}

export default Component;
