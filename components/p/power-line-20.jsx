import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-mslvbxr.css';
import '../../css/s/sbemsbi8m.css';
import '../../css/k/kb7wbni7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-mslvbxr"/><path class="sbemsbi8m"/><path class="kb7wbni7g"/>`,
		"fallback": "energy-icons:power-line-20",
	});
}

export default Component;
