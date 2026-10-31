import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjk_vvbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjk_vvbsn"/>`,
		"fallback": "coolicons:triangle-help-round",
	});
}

export default Component;
