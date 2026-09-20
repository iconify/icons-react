import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpb8lgbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpb8lgbke"/>`,
		"fallback": "mdi:relation-one-or-many-to-many",
	});
}

export default Component;
