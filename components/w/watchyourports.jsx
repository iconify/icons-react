import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6b-2c14q.css';
import '../../css/y/yg-3rkiwq.css';
import '../../css/k/kjd9sg23k.css';
import '../../css/c/cq325diaz.css';
import '../../css/a/a2n9rvbrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6b-2c14q"/><path class="yg-3rkiwq"/><path class="kjd9sg23k"/><path class="cq325diaz"/><path class="a2n9rvbrb"/>`,
		"fallback": "selfhst:watchyourports",
	});
}

export default Component;
