import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqsbbac6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqsbbac6a"/>`,
		"fallback": "cib:material-design",
	});
}

export default Component;
