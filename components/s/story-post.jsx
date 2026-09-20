import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkgk_7lou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkgk_7lou"/>`,
		"fallback": "streamline-sharp:story-post",
	});
}

export default Component;
