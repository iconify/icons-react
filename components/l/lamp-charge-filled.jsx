import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcn3ptbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcn3ptbcy"/>`,
		"fallback": "reicon:lamp-charge-filled",
	});
}

export default Component;
