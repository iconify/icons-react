import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7z0dvb5g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7z0dvb5g"/>`,
		"fallback": "pinhead:three-tall-rectangles-left",
	});
}

export default Component;
