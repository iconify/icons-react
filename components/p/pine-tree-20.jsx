import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix3tztiqy.css';
import '../../css/s/sg1__vokg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix3tztiqy"/><path class="sg1__vokg"/>`,
		"fallback": "energy-icons:pine-tree-20",
	});
}

export default Component;
