import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp_jspb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp_jspb1f"/>`,
		"fallback": "gg:math-equal",
	});
}

export default Component;
