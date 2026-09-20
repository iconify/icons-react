import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4_6atnkp.css';
import '../../css/l/lnxi9kb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4_6atnkp"/><circle class="lnxi9kb0f"/>`,
		"fallback": "prime:wallet",
	});
}

export default Component;
