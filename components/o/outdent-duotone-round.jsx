import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8gg2pb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8gg2pb-t"/>`,
		"fallback": "coolicons:outdent-duotone-round",
	});
}

export default Component;
