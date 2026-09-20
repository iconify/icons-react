import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9nycrbpr.css';
import '../../css/e/e0maw8b-r.css';
import '../../css/h/hjnsd4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9nycrbpr"/><path class="e0maw8b-r"/><path class="hjnsd4bgm"/>`,
		"fallback": "token:rvst",
	});
}

export default Component;
