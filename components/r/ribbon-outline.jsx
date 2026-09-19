import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2lfpzbfh.css';
import '../../css/d/d5vledc_g.css';
import '../../css/o/o6nm72myp.css';
import '../../css/k/knv03ac5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="d2lfpzbfh"/><path class="d5vledc_g"/><path class="o6nm72myp"/><circle class="knv03ac5w"/>`,
		"fallback": "famicons:ribbon-outline",
	});
}

export default Component;
