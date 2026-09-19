import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/m/mkxxlyp4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b bwibdw4bb"/><path class="b mkxxlyp4n"/>`,
		"fallback": "boxicons:shield-circle-filled",
	});
}

export default Component;
