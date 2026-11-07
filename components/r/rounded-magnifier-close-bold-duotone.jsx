import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y477w0i.css';
import '../../css/e/en0qu8tuo.css';
import '../../css/a/attm18beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9y477w0i"/><path class="en0qu8tuo"/><path class="attm18beq"/>`,
		"fallback": "solar:rounded-magnifier-close-bold-duotone",
	});
}

export default Component;
