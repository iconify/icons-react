import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3jv8dbwt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3jv8dbwt"/>`,
		"fallback": "pinhead:oval-broadleaved-tree-beside-oval-broadleaved-tree-on-ground",
	});
}

export default Component;
