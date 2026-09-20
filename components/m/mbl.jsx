import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3dnj8n0d.css';
import '../../css/z/zsrd_jbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3dnj8n0d"/><path class="zsrd_jbcz"/>`,
		"fallback": "token:mbl",
	});
}

export default Component;
