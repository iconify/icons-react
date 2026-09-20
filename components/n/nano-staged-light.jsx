import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks918j6of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks918j6of"/>`,
		"fallback": "material-icon-theme:nano-staged-light",
	});
}

export default Component;
