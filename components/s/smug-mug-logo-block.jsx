import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoj8bc9hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eoj8bc9hp"/>`,
		"fallback": "streamline-logos:smug-mug-logo-block",
	});
}

export default Component;
