import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4y-9qb6u.css';
import '../../css/u/u1frltaje.css';
import '../../css/f/faskdnt1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4y-9qb6u"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"/></path><path class="u1frltaje"><animateTransform additive="sum" attributeName="transform" begin="-1.5s" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"/></path><path class="faskdnt1b"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="48 0; -48 0; 48 0"/></path>`,
		"fallback": "meteocons:mist",
	});
}

export default Component;
