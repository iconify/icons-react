import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3t3gjbsn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3t3gjbsn"/>`,
		"fallback": "pinhead:railway-track-crossing-dashed-line",
	});
}

export default Component;
