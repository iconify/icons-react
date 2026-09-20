import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pye6s3a0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pye6s3a0e"/>`,
		"fallback": "nimbus:size-width",
	});
}

export default Component;
