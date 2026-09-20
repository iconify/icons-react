import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adstg57zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adstg57zh"/>`,
		"fallback": "tabler:prompt",
	});
}

export default Component;
