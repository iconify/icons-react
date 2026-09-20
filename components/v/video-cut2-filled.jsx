import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhj-4g1kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhj-4g1kr"/>`,
		"fallback": "reicon:video-cut2-filled",
	});
}

export default Component;
