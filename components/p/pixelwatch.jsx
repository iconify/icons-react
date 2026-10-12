import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2h6jcreu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2h6jcreu"/>`,
		"fallback": "cbi:pixelwatch",
	});
}

export default Component;
