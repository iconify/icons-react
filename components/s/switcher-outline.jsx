import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fud2otu-j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fud2otu-j"/>`,
		"fallback": "ant-design:switcher-outline",
	});
}

export default Component;
