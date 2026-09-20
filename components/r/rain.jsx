import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz7spkb-t.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz7spkb-t"/>`,
		"fallback": "wpf:rain",
	});
}

export default Component;
