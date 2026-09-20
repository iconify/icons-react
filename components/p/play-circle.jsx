import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3-zj-h9b.css';
import '../../css/s/sbjtnhxpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3-zj-h9b"/><path class="sbjtnhxpx"/>`,
		"fallback": "tdesign:play-circle",
	});
}

export default Component;
