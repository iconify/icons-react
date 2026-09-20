import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm3f23fqe.css';
import '../../css/q/qwo6utarj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm3f23fqe"/><path class="qwo6utarj"/>`,
		"fallback": "token:ion",
	});
}

export default Component;
