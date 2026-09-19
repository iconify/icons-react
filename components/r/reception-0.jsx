import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrz21bcfg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrz21bcfg"/>`,
		"fallback": "bi:reception-0",
	});
}

export default Component;
