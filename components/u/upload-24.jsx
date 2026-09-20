import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukv352b1i.css';
import '../../css/n/n1m7q-3fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukv352b1i"/><path class="n1m7q-3fc"/>`,
		"fallback": "octicon:upload-24",
	});
}

export default Component;
