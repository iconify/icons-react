import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykg-_fbes.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykg-_fbes"/>`,
		"fallback": "pinhead:roman-numeral-ix",
	});
}

export default Component;
