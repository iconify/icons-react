import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulh3m2ilf.css';
import '../../css/k/kxvistblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulh3m2ilf"/><path clip-rule="evenodd" class="kxvistblb"/>`,
		"fallback": "qlementine-icons:pedal-outlines-24",
	});
}

export default Component;
