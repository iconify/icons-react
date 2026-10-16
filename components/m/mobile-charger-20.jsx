import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5seiobvq.css';
import '../../css/u/uwrgjpbhp.css';
import '../../css/r/rs71wsbme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5seiobvq"/><path class="uwrgjpbhp"/><path class="rs71wsbme"/>`,
		"fallback": "energy-icons:mobile-charger-20",
	});
}

export default Component;
