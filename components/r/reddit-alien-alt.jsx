import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsm66sbym.css';
import '../../css/q/qtg25xsmx.css';
import '../../css/n/n7ttdxber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsm66sbym"/><path class="qtg25xsmx"/><path class="n7ttdxber"/>`,
		"fallback": "uim:reddit-alien-alt",
	});
}

export default Component;
