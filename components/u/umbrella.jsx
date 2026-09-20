import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyndy7y0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dyndy7y0b"/>`,
		"fallback": "reicon:umbrella",
	});
}

export default Component;
