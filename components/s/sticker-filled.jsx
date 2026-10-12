import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7zwfz7lk.css';
import '../../css/n/nbhl3j1uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7zwfz7lk"/><path class="nbhl3j1uc"/>`,
		"fallback": "lucide-extended:sticker-filled",
	});
}

export default Component;
