import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhkw86bin.css';
import '../../css/x/x8cmsqbjt.css';
import '../../css/t/tx7rwubgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhkw86bin"/><path class="x8cmsqbjt"/><path class="tx7rwubgb"/>`,
		"fallback": "carbon:study-view",
	});
}

export default Component;
