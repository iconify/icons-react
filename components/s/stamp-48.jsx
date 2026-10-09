import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1m2c5x5x.css';
import '../../css/z/zxs4re9vm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1m2c5x5x"/><path class="zxs4re9vm"/>`,
		"fallback": "energy-icons:stamp-48",
	});
}

export default Component;
