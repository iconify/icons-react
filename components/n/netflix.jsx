import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiqu0vbdz.css';
import '../../css/s/sjfxabblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiqu0vbdz"/><path class="sjfxabblt"/>`,
		"fallback": "mage:netflix",
	});
}

export default Component;
