import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qob814b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qob814b7p"/>`,
		"fallback": "withicons:test-tube-gloss",
	});
}

export default Component;
