import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nri6v8bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nri6v8bpw"/>`,
		"fallback": "tabler:label-filled",
	});
}

export default Component;
