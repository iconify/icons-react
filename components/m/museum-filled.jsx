import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc5tmtbuk.css';
import '../../css/j/jb32k7b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc5tmtbuk"/><path class="jb32k7b4k"/>`,
		"fallback": "tdesign:museum-filled",
	});
}

export default Component;
