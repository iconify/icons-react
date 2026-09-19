import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if33zkffk.css';
import '../../css/f/fa0fk2bvn.css';
import '../../css/g/g7c7tpvnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if33zkffk"/><path class="fa0fk2bvn"/><path class="g7c7tpvnn"/>`,
		"fallback": "flat-color-icons:tablet-android",
	});
}

export default Component;
