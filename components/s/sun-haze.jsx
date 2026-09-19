import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvf9yc10o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvf9yc10o"/>`,
		"fallback": "f7:sun-haze",
	});
}

export default Component;
