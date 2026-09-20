import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpr6kb9a.css';
import '../../css/m/mlayuqb-h.css';
import '../../css/d/dpf700fwr.css';
import '../../css/q/qmp0aacci.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xjpr6kb9a"/><path class="mlayuqb-h"/><path class="dpf700fwr"/><path class="qmp0aacci"/>`,
		"fallback": "openmoji:japanese-service-charge-button",
	});
}

export default Component;
