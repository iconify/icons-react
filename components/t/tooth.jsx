import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mti05vejb.css';
import '../../css/q/qxq52ip6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mti05vejb"/><path class="qxq52ip6p"/>`,
		"fallback": "withicons-bauhaus:tooth",
	});
}

export default Component;
