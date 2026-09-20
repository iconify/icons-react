import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usq1l0bwz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="usq1l0bwz"/>`,
		"fallback": "streamline-plump:justice-scale-2-remix",
	});
}

export default Component;
