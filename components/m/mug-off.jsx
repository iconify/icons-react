import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqbtf-q7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqbtf-q7x"/>`,
		"fallback": "tabler:mug-off",
	});
}

export default Component;
