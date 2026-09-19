import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdssnbbom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/q/q285h9bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdssnbbom"/><path class="bwibdw4bb"/><path class="q285h9bpu"/>`,
		"fallback": "boxicons:universal-access",
	});
}

export default Component;
