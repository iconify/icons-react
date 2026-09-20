import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp4ro4bdw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp4ro4bdw"/>`,
		"fallback": "pinhead:oval-broadleaved-tree",
	});
}

export default Component;
