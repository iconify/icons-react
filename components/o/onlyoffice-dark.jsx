import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk16tac8i.css';
import '../../css/h/hnr6sxbeb.css';
import '../../css/i/i9ou5abuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk16tac8i"/><path class="hnr6sxbeb"/><path class="i9ou5abuk"/>`,
		"fallback": "selfhst:onlyoffice-dark",
	});
}

export default Component;
