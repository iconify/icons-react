import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm_2psbxc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm_2psbxc"/>`,
		"fallback": "pinhead:japanese-teacup",
	});
}

export default Component;
