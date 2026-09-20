import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfln1p-mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfln1p-mv"/>`,
		"fallback": "ri:progress-2-line",
	});
}

export default Component;
