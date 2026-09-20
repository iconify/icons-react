import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1gz5sbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1gz5sbmt"/>`,
		"fallback": "reicon:stop-circle",
	});
}

export default Component;
