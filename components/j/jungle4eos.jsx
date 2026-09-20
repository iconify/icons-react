import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7m2gubse.css';
import '../../css/o/ocdt_ibwk.css';
import '../../css/h/hz83yxben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7m2gubse"/><path class="ocdt_ibwk"/><path class="hz83yxben"/>`,
		"fallback": "token:jungle4eos",
	});
}

export default Component;
