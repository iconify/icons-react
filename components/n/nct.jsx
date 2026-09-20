import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghx9yzbxt.css';
import '../../css/k/ktjyq3bmf.css';
import '../../css/v/v0b7vsbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghx9yzbxt"/><path class="ktjyq3bmf"/><path class="v0b7vsbjy"/>`,
		"fallback": "token:nct",
	});
}

export default Component;
