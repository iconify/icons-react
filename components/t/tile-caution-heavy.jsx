import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fza5vnbmg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fza5vnbmg"/>`,
		"fallback": "memory:tile-caution-heavy",
	});
}

export default Component;
