import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viy1tfbqb.css';
import '../../css/g/gge4koq5d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viy1tfbqb"/><path class="gge4koq5d"/>`,
		"fallback": "devicon:testrail-wordmark",
	});
}

export default Component;
