import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/y/yo13rm.css';
import '../../css/w/w90myk.css';
import '../../css/v/vusf7y.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c yo13rm"/><path class="a0m25c w90myk"/><path class="a0m25c vusf7y"/>`,
		"fallback": "line-md:log-out",
	});
}

export default Component;
