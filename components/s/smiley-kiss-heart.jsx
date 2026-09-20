import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atebddbcx.css';
import '../../css/o/odo83i1su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atebddbcx"/><path class="odo83i1su"/>`,
		"fallback": "streamline-freehand:smiley-kiss-heart",
	});
}

export default Component;
