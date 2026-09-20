import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp60v3b-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp60v3b-i"/>`,
		"fallback": "streamline-plump:moustache-solid",
	});
}

export default Component;
