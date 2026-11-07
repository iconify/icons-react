import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6d250bwp.css';
import '../../css/e/ewabd3k5e.css';
import '../../css/s/s3imwknyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6d250bwp"/><path class="ewabd3k5e"/><path clip-rule="evenodd" class="s3imwknyq"/>`,
		"fallback": "solar:user-cross-rounded-outline",
	});
}

export default Component;
