import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0-71bkm.css';
import '../../css/s/s7e79xbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0-71bkm"/><path class="s7e79xbzv"/>`,
		"fallback": "streamline-ultimate:upload-brackets-bold",
	});
}

export default Component;
