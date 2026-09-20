import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crev81m-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crev81m-x"/>`,
		"fallback": "pinhead:person-wearing-helmet-padding-raft",
	});
}

export default Component;
