import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s34_ysbgj.css';
import '../../css/l/l5ntip6-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s34_ysbgj"/><path class="l5ntip6-x"/>`,
		"fallback": "carbon:money",
	});
}

export default Component;
