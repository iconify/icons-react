import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9rbmb3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc9rbmb3j"/>`,
		"fallback": "file-icons:snort",
	});
}

export default Component;
