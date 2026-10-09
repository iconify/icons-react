import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtth2tkbn.css';
import '../../css/i/ikhqytp8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtth2tkbn"/><path class="ikhqytp8z"/>`,
		"fallback": "energy-icons:memory-card-20-bold",
	});
}

export default Component;
