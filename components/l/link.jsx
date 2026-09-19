import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn6wamb3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn6wamb3j"/>`,
		"fallback": "icon-park:link",
	});
}

export default Component;
