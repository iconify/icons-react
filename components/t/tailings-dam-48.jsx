import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjbhs-95h.css';
import '../../css/z/zns5-suvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjbhs-95h"/><path class="zns5-suvn"/>`,
		"fallback": "energy-icons:tailings-dam-48",
	});
}

export default Component;
