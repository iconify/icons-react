import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdhskebrq.css';
import '../../css/l/l51b0lbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdhskebrq"/><path class="l51b0lbbq"/>`,
		"fallback": "tdesign:mobile-shortcut-filled",
	});
}

export default Component;
