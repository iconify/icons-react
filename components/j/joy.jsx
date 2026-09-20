import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhd2f7u1l.css';
import '../../css/d/dcvw64xgv.css';
import '../../css/s/scxamt7eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhd2f7u1l"/><path class="dcvw64xgv"/><path class="scxamt7eq"/>`,
		"fallback": "token:joy",
	});
}

export default Component;
