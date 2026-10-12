import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkj6lmbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkj6lmbzm"/>`,
		"fallback": "lucide-extended:layout-panel-left-filled",
	});
}

export default Component;
