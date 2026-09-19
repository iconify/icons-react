import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrcfhl16j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrcfhl16j"/>`,
		"fallback": "file-icons:moleculer",
	});
}

export default Component;
