import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_jofbui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly_jofbui"/>`,
		"fallback": "streamline-plump:landing-solid",
	});
}

export default Component;
