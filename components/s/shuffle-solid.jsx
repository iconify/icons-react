import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcm44_rqe.css';
import '../../css/g/gh05_sajp.css';
import '../../css/o/o7mpebc-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcm44_rqe"/><path class="gh05_sajp"/><path class="o7mpebc-w"/>`,
		"fallback": "pixel:shuffle-solid",
	});
}

export default Component;
