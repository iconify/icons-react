import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq7cyxzqk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq7cyxzqk"/>`,
		"fallback": "pinhead:person-standing-with-droplets",
	});
}

export default Component;
