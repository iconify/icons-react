import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaqykgbsd.css';
import '../../css/n/nbhl3j1uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaqykgbsd"/><path class="nbhl3j1uc"/>`,
		"fallback": "lucide-extended:sticky-note-filled",
	});
}

export default Component;
