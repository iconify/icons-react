import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wrbv8jyks.css';
import '../../css/u/ulvxzv0rx.css';
import '../../css/o/o3ogfsbbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wrbv8jyks"/><path class="ulvxzv0rx"/><path class="o3ogfsbbi"/></g>`,
		"fallback": "streamline-plump-color:text-image-center-large",
	});
}

export default Component;
