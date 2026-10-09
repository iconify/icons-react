import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpgircbhz.css';
import '../../css/o/ouirlxbmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpgircbhz"/><path class="ouirlxbmn"/>`,
		"fallback": "energy-icons:voicemail-48-bold",
	});
}

export default Component;
