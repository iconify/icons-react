import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebxc1ccgv.css';
import '../../css/g/gwken0w2c.css';
import '../../css/s/sy_a5lx3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebxc1ccgv"/><path clip-rule="evenodd" class="gwken0w2c"/><path clip-rule="evenodd" class="sy_a5lx3l"/>`,
		"fallback": "cuida:lifebuoy-outline",
	});
}

export default Component;
