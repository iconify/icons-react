import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw5u4miyi.css';
import '../../css/b/b2dxt0bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw5u4miyi"/><path class="b2dxt0bxr"/>`,
		"fallback": "streamline-ultimate:paper-write-bold",
	});
}

export default Component;
