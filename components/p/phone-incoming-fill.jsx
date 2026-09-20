import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2dkisrbn.css';
import '../../css/i/i483i_kue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2dkisrbn"/><path class="i483i_kue"/>`,
		"fallback": "mage:phone-incoming-fill",
	});
}

export default Component;
