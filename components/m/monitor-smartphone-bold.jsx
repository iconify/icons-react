import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt9l_-hve.css';
import '../../css/g/gazl242lv.css';
import '../../css/q/qw8mp2b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt9l_-hve"/><path class="gazl242lv"/><path clip-rule="evenodd" class="qw8mp2b-v"/>`,
		"fallback": "solar:monitor-smartphone-bold",
	});
}

export default Component;
