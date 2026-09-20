import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agai12bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agai12bbl"/>`,
		"fallback": "tdesign:sound-up-filled",
	});
}

export default Component;
