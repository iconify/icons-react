import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adhxuu-rl.css';
import '../../css/l/l520-dkdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adhxuu-rl"/><path class="l520-dkdu"/>`,
		"fallback": "material-icon-theme:pinejs",
	});
}

export default Component;
