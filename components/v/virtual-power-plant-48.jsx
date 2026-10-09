import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya-i-fb_p.css';
import '../../css/x/xl9astbne.css';
import '../../css/h/hzypfodab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya-i-fb_p"/><path class="xl9astbne"/><path class="hzypfodab"/>`,
		"fallback": "energy-icons:virtual-power-plant-48",
	});
}

export default Component;
