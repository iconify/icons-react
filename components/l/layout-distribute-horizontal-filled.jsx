import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsnrkh4ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsnrkh4ro"/>`,
		"fallback": "tabler:layout-distribute-horizontal-filled",
	});
}

export default Component;
