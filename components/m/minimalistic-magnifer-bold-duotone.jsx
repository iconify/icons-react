import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-tqdrbyb.css';
import '../../css/j/j-tmtc6ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-tqdrbyb"/><path clip-rule="evenodd" class="j-tmtc6ls"/>`,
		"fallback": "solar:minimalistic-magnifer-bold-duotone",
	});
}

export default Component;
