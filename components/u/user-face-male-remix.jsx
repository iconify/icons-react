import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r737vpbyu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r737vpbyu"/>`,
		"fallback": "streamline-plump:user-face-male-remix",
	});
}

export default Component;
