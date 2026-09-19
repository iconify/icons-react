import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io1ow38wk.css';
import '../../css/g/g21o-jbgm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io1ow38wk"/><path class="g21o-jbgm"/>`,
		"fallback": "carbon:stay-inside",
	});
}

export default Component;
