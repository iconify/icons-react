import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qttew1k1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qttew1k1g"/>`,
		"fallback": "cib:livejournal",
	});
}

export default Component;
