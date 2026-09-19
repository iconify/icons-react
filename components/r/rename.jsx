import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws0ombcdd.css';
import '../../css/t/t72impnyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws0ombcdd"/><path class="t72impnyv"/>`,
		"fallback": "bxs:rename",
	});
}

export default Component;
