import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqlnzacqj.css';
import '../../css/d/ddpz1lxap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqlnzacqj"/><path class="ddpz1lxap"/>`,
		"fallback": "nrk:media-theater-active",
	});
}

export default Component;
