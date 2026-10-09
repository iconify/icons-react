import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7pomwafq.css';
import '../../css/c/cni5k5b-q.css';
import '../../css/d/d23d6lbts.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7pomwafq"/><path class="cni5k5b-q"/><path class="d23d6lbts"/><path class="wfx3nk7mg"/>`,
		"fallback": "energy-icons:radiator-valve-48",
	});
}

export default Component;
