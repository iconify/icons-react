import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1sy9hifo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1sy9hifo"/>`,
		"fallback": "pinhead:turtle-shell-top",
	});
}

export default Component;
