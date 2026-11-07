import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz6ignj0u.css';
import '../../css/g/g-bzx0b-k.css';
import '../../css/z/z1svy0bqv.css';
import '../../css/n/nwuzx5b5m.css';
import '../../css/f/fcfk7zbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz6ignj0u"/><path class="g-bzx0b-k"/><path class="z1svy0bqv"/><path class="nwuzx5b5m"/><path class="fcfk7zbak"/>`,
		"fallback": "solar:planet-3-bold",
	});
}

export default Component;
