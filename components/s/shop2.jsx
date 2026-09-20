import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpmf6gm_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpmf6gm_p"/>`,
		"fallback": "reicon:shop2",
	});
}

export default Component;
