import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxmp_-hzr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxmp_-hzr"/>`,
		"fallback": "pinhead:roman-numeral-vii",
	});
}

export default Component;
