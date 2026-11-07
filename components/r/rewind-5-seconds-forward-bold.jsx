import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssc66acas.css';
import '../../css/a/a4x15ccoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssc66acas"/><path class="a4x15ccoa"/>`,
		"fallback": "solar:rewind-5-seconds-forward-bold",
	});
}

export default Component;
