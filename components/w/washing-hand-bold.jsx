import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usw_opafh.css';
import '../../css/s/s9jcc4brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usw_opafh"/><path class="s9jcc4brv"/>`,
		"fallback": "streamline-ultimate:washing-hand-bold",
	});
}

export default Component;
