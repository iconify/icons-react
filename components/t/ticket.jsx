import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw0upqbfm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw0upqbfm"/>`,
		"fallback": "fa7-solid:ticket",
	});
}

export default Component;
