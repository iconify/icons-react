import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l01w4f3bq.css';
import '../../css/n/n6es8zk1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l01w4f3bq"/><path class="n6es8zk1y"/>`,
		"fallback": "streamline-freehand:settings-hammer",
	});
}

export default Component;
