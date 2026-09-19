import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adkp4jfoq.css';
import '../../css/r/r0_huqbdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adkp4jfoq"/><path class="r0_huqbdt"/>`,
		"fallback": "carbon:pricing-consumption",
	});
}

export default Component;
