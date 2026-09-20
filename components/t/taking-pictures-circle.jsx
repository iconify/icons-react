import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgoay3b5b.css';
import '../../css/r/r9cdxubdv.css';
import '../../css/s/sm4hol1wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgoay3b5b"/><path class="r9cdxubdv"/><path class="sm4hol1wi"/>`,
		"fallback": "streamline-freehand:taking-pictures-circle",
	});
}

export default Component;
