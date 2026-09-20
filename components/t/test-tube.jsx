import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/e/et22nn83t.css';
import '../../css/i/i2dvv9rdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="et22nn83t"/><path class="i2dvv9rdi"/></g>`,
		"fallback": "streamline-plump:test-tube",
	});
}

export default Component;
