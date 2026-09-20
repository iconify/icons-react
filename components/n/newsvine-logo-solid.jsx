import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmwyj3bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmwyj3bku"/>`,
		"fallback": "streamline-logos:newsvine-logo-solid",
	});
}

export default Component;
