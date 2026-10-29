import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-vy29b6h.css';
import '../../css/y/yhfomobvu.css';
import '../../css/d/dnsh1cbuv.css';
import '../../css/i/i7cnlq80v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-vy29b6h wm-k"/><path class="wm-k yhfomobvu"/><path class="dnsh1cbuv wm-k"/><path class="i7cnlq80v wm-a"/>`,
		"fallback": "withicons-bauhaus:watch",
	});
}

export default Component;
