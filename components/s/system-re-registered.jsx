import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sugy9id7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sugy9id7y"/>`,
		"fallback": "eos-icons:system-re-registered",
	});
}

export default Component;
