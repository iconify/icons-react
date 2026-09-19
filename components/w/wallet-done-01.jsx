import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi7vqwb0l.css';
import '../../css/f/fhas8sg6b.css';
import '../../css/r/rbw7kknaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi7vqwb0l"/><path class="fhas8sg6b"/><path class="rbw7kknaz"/></g>`,
		"fallback": "hugeicons:wallet-done-01",
	});
}

export default Component;
