import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grlu2bcoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grlu2bcoy"/>`,
		"fallback": "reicon:paperclip3",
	});
}

export default Component;
