import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxwb8tbxv.css';
import '../../css/d/dsco5xu2d.css';
import '../../css/e/e2j9qob0q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxwb8tbxv"/><path class="dsco5xu2d"/><path class="e2j9qob0q"/>`,
		"fallback": "energy-icons:test-tube-20",
	});
}

export default Component;
