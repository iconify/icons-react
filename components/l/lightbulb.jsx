import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9dm_5b8b.css';
import '../../css/x/x6d1mvvmw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9dm_5b8b"/><path class="x6d1mvvmw"/>`,
		"fallback": "nimbus:lightbulb",
	});
}

export default Component;
