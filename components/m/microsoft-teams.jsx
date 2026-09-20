import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gepc7-94s.css';
import '../../css/u/ud-710byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gepc7-94s"/><path class="ud-710byh"/>`,
		"fallback": "lineicons:microsoft-teams",
	});
}

export default Component;
