import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5rak2bbx.css';
import '../../css/i/iyuvrebaw.css';
import '../../css/c/cnvsi8cop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5rak2bbx"/><path class="iyuvrebaw"/><path class="cnvsi8cop"/>`,
		"fallback": "energy-icons:plumb-bob-48-bold",
	});
}

export default Component;
