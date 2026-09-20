import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwwpu4biy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwwpu4biy"/>`,
		"fallback": "oui:logstash-input",
	});
}

export default Component;
