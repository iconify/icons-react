import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aggrzgk7q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aggrzgk7q"/>`,
		"fallback": "roentgen:vanity-mirror",
	});
}

export default Component;
