import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd5m9ubhu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nd5m9ubhu"/>`,
		"fallback": "streamline:user-check-validate-solid",
	});
}

export default Component;
