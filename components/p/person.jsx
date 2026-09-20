import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/w/wonoqj.css';
import '../../css/x/xzxtaq.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c wonoqj"/><path class="a0m25c xzxtaq"/>`,
		"fallback": "line-md:person",
	});
}

export default Component;
