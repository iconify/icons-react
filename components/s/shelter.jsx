import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awlexv-3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awlexv-3s"/>`,
		"fallback": "guidance:shelter",
	});
}

export default Component;
