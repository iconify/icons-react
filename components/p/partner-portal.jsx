import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/z/zg_xfubcu.css';
import '../../css/z/z98wavxds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><path class="zg_xfubcu"/><path class="z98wavxds"/>`,
		"fallback": "gcp:partner-portal",
	});
}

export default Component;
