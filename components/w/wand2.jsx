import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6v3-8bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k6v3-8bhq"/>`,
		"fallback": "reicon:wand2",
	});
}

export default Component;
