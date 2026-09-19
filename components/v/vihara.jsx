import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xejpd7b6g.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xejpd7b6g"/>`,
		"fallback": "fa6-solid:vihara",
	});
}

export default Component;
