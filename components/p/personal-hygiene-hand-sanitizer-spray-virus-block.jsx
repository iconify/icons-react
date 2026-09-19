import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_3oub9zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_3oub9zq"/>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-spray-virus-block",
	});
}

export default Component;
