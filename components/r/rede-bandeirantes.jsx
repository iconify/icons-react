import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apfv19-nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apfv19-nt"/>`,
		"fallback": "cbi:rede-bandeirantes",
	});
}

export default Component;
