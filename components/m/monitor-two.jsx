import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzpyehbjv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzpyehbjv"/>`,
		"fallback": "icon-park:monitor-two",
	});
}

export default Component;
