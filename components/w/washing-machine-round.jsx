import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycp1-7btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycp1-7btq"/>`,
		"fallback": "coolicons:washing-machine-round",
	});
}

export default Component;
