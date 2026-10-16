import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v87_h9jef.css';
import '../../css/k/kb-m8o5vb.css';
import '../../css/v/vm-u7rbby.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v87_h9jef"/><path class="kb-m8o5vb"/><path class="vm-u7rbby"/>`,
		"fallback": "energy-icons:train-station-20",
	});
}

export default Component;
