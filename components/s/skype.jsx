import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0bk0ccsb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0bk0ccsb"/>`,
		"fallback": "entypo-social:skype",
	});
}

export default Component;
