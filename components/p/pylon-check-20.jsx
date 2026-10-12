import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tev8fjt6v.css';
import '../../css/w/wnj4gh3ih.css';
import '../../css/v/v82746bqh.css';
import '../../css/a/a23ibfbrs.css';
import '../../css/l/l_5jk4b2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tev8fjt6v"/><path class="wnj4gh3ih"/><path class="v82746bqh"/><path class="a23ibfbrs"/><path class="l_5jk4b2p"/>`,
		"fallback": "energy-icons:pylon-check-20",
	});
}

export default Component;
