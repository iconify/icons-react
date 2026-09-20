import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvkhmp2za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvkhmp2za"/>`,
		"fallback": "streamline-plump:recording-tape-1-solid",
	});
}

export default Component;
