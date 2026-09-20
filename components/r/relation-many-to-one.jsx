import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg1l3vbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg1l3vbop"/>`,
		"fallback": "mdi:relation-many-to-one",
	});
}

export default Component;
