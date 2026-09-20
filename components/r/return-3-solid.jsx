import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwu_i49mz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwu_i49mz"/>`,
		"fallback": "streamline-plump:return-3-solid",
	});
}

export default Component;
