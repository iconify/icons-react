import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf57_hl-a.css';
import '../../css/q/qrxusubxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf57_hl-a"/><path class="qrxusubxp"/>`,
		"fallback": "energy-icons:torch-48",
	});
}

export default Component;
