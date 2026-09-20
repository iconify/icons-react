import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plqmpyb-k.css';

const viewBox = {"width":76.1,"height":45};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plqmpyb-k"/>`,
		"fallback": "thesvg:native-instruments",
	});
}

export default Component;
