import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqy6lhb1f.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/n/n2f3vcc0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqy6lhb1f"/><path class="oz0-7c0kb"/><path class="n2f3vcc0n"/>`,
		"fallback": "energy-icons:stargazing-48-bold",
	});
}

export default Component;
