import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3u148uzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3u148uzf"/>`,
		"fallback": "streamline-plump:pharmacy-remix",
	});
}

export default Component;
