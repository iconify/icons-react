import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioxie2bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ioxie2bbo"/>`,
		"fallback": "streamline-sharp:ruler-remix",
	});
}

export default Component;
