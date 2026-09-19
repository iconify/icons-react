import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfku9-bda.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfku9-bda"/>`,
		"fallback": "fa6-solid:school-circle-xmark",
	});
}

export default Component;
