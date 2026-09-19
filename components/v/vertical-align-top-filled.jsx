import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eghrhdq2l.css';
import '../../css/q/qlwbujp-h.css';
import '../../css/n/nitjh-b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eghrhdq2l"/><rect class="qlwbujp-h"/><rect class="nitjh-b5g"/>`,
		"fallback": "boxicons:vertical-align-top-filled",
	});
}

export default Component;
