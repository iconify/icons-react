import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpc-7dbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpc-7dbiw"/>`,
		"fallback": "streamline-ultimate:shape-cube",
	});
}

export default Component;
