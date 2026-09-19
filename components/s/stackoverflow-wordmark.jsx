import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqapy4bsh.css';
import '../../css/u/uy44wxbxz.css';
import '../../css/n/n230x8b_n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqapy4bsh"/><path class="uy44wxbxz"/><path class="n230x8b_n"/>`,
		"fallback": "devicon:stackoverflow-wordmark",
	});
}

export default Component;
