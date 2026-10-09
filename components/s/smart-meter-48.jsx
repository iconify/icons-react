import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw53-sbdu.css';
import '../../css/y/ymi4owbyw.css';
import '../../css/f/frfktfbcq.css';
import '../../css/z/zczeh0h7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw53-sbdu"/><path class="ymi4owbyw"/><path class="frfktfbcq"/><path class="zczeh0h7o"/>`,
		"fallback": "energy-icons:smart-meter-48",
	});
}

export default Component;
