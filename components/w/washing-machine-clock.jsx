import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdv2lsgrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdv2lsgrv"/>`,
		"fallback": "noviair-light:washing-machine-clock",
	});
}

export default Component;
