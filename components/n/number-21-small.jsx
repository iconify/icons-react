import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6bg_5m0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6bg_5m0f"/>`,
		"fallback": "tabler:number-21-small",
	});
}

export default Component;
