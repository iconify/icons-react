import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_qogjuvx.css';
import '../../css/j/jxl67pbry.css';
import '../../css/f/fqqpryb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p_qogjuvx"/><circle class="jxl67pbry"/><path class="fqqpryb5m"/></g>`,
		"fallback": "lucide:scan-eye",
	});
}

export default Component;
