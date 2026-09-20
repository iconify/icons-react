import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3t6plt2w.css';
import '../../css/y/yddqsqbhk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3t6plt2w"/><path clip-rule="evenodd" class="yddqsqbhk"/>`,
		"fallback": "teenyicons:message-no-access-solid",
	});
}

export default Component;
