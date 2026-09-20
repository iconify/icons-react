import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x725thbup.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x725thbup"/>`,
		"fallback": "wpf:rename",
	});
}

export default Component;
