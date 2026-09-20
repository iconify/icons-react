import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlqqg-bku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlqqg-bku"/>`,
		"fallback": "ix:map-alt-2",
	});
}

export default Component;
