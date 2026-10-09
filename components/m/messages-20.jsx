import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ik_bbaf.css';
import '../../css/i/idjsz7b6f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2ik_bbaf"/><path class="idjsz7b6f"/>`,
		"fallback": "energy-icons:messages-20",
	});
}

export default Component;
