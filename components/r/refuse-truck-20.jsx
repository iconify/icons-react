import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v540sbbbo.css';
import '../../css/j/jegh5lb3e.css';
import '../../css/s/sg57pbbwd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v540sbbbo"/><path class="jegh5lb3e"/><path class="sg57pbbwd"/>`,
		"fallback": "energy-icons:refuse-truck-20",
	});
}

export default Component;
