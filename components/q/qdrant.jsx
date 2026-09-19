import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6yxyvb3p.css';
import '../../css/l/l32vte6zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6yxyvb3p"/><path class="l32vte6zx"/>`,
		"fallback": "bxl:qdrant",
	});
}

export default Component;
