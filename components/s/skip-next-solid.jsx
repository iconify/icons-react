import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3mt7fwhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3mt7fwhp"/>`,
		"fallback": "basil:skip-next-solid",
	});
}

export default Component;
