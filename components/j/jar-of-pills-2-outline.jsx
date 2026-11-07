import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozgt7tt7d.css';
import '../../css/r/rhx5tab9t.css';
import '../../css/l/l49vyab9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ozgt7tt7d"/><path class="rhx5tab9t"/><path clip-rule="evenodd" class="l49vyab9y"/>`,
		"fallback": "solar:jar-of-pills-2-outline",
	});
}

export default Component;
