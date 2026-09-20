import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn937z2kt.css';
import '../../css/a/afhlj5qgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn937z2kt"/><path class="afhlj5qgy"/>`,
		"fallback": "streamline-plump:treasure-chest-solid",
	});
}

export default Component;
