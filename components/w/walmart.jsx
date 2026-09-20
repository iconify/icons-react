import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsfh0fb9d.css';

const viewBox = {"width":200.82,"height":36.44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsfh0fb9d"/>`,
		"fallback": "thesvg-color:walmart",
	});
}

export default Component;
