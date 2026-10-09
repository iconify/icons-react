import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsoei1ajq.css';
import '../../css/w/waz_2hbmd.css';
import '../../css/w/wgvzgybih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsoei1ajq"/><path class="waz_2hbmd"/><path class="wgvzgybih"/>`,
		"fallback": "energy-icons:power-station-20",
	});
}

export default Component;
