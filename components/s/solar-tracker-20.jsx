import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l94bcicug.css';
import '../../css/b/bjyphubzh.css';
import '../../css/f/ffcx5ccbi.css';
import '../../css/f/ffv-oibsh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l94bcicug"/><path class="bjyphubzh"/><path class="ffcx5ccbi"/><path class="ffv-oibsh"/>`,
		"fallback": "energy-icons:solar-tracker-20",
	});
}

export default Component;
