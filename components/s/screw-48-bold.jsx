import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li444abjk.css';
import '../../css/o/o7h961gwp.css';
import '../../css/v/vmrjjfc0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li444abjk"/><path class="o7h961gwp"/><path class="vmrjjfc0h"/>`,
		"fallback": "energy-icons:screw-48-bold",
	});
}

export default Component;
