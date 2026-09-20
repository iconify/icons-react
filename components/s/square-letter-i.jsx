import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzef9p_tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzef9p_tp"/>`,
		"fallback": "tabler:square-letter-i",
	});
}

export default Component;
