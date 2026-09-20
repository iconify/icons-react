import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/o/ocisskime.css';
import '../../css/i/itado9-om.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="ocisskime"/><path class="itado9-om"/></g>`,
		"fallback": "streamline-plump:module",
	});
}

export default Component;
