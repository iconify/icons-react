import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hjwxbca.css';
import '../../css/o/o71oribfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3hjwxbca"/><path class="o71oribfg"/>`,
		"fallback": "selfhst:mozilla-monitor-dark",
	});
}

export default Component;
