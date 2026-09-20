import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpgnasd1n.css';
import '../../css/p/psgevsbih.css';
import '../../css/g/gs86xrbnh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpgnasd1n"/><path class="psgevsbih"/><circle class="gs86xrbnh"/>`,
		"fallback": "ooui:logo-wikimedia",
	});
}

export default Component;
