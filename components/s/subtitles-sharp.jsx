import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tef0-zbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tef0-zbpw"/>`,
		"fallback": "keyline-icons:subtitles-sharp",
	});
}

export default Component;
