import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrypl5btf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrypl5btf"/>`,
		"fallback": "pinhead:person-spiking-ball",
	});
}

export default Component;
