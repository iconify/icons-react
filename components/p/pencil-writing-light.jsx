import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohmadlugj.css';
import '../../css/h/h89cyrqhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohmadlugj"/><path class="h89cyrqhn"/>`,
		"fallback": "stash:pencil-writing-light",
	});
}

export default Component;
