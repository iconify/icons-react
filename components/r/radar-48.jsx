import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/t/tzyoq6bkv.css';
import '../../css/p/pzv-ogb1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="tzyoq6bkv"/><path class="pzv-ogb1u"/>`,
		"fallback": "energy-icons:radar-48",
	});
}

export default Component;
