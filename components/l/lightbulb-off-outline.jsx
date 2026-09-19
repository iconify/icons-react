import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4kwtb3sj.css';
import '../../css/l/lw-tv69tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4kwtb3sj"/><path clip-rule="evenodd" class="lw-tv69tr"/>`,
		"fallback": "basil:lightbulb-off-outline",
	});
}

export default Component;
