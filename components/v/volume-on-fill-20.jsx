import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih1h7z2gg.css';
import '../../css/l/l_7m7z2gc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih1h7z2gg"/><path class="l_7m7z2gc"/>`,
		"fallback": "garden:volume-on-fill-20",
	});
}

export default Component;
