import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nom9670_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nom9670_o"/>`,
		"fallback": "mdi:relation-only-one-to-one",
	});
}

export default Component;
