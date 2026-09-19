import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zosd5pbda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zosd5pbda"/>`,
		"fallback": "file-icons:knime",
	});
}

export default Component;
