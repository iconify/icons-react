import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oku0v98jv.css';
import '../../css/l/l93gu5f2n.css';
import '../../css/o/o23se-ntx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oku0v98jv"/><path class="l93gu5f2n"/><path class="o23se-ntx"/>`,
		"fallback": "energy-icons:lighthouse-20",
	});
}

export default Component;
