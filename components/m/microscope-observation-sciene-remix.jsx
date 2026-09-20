import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu69_4bhy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iu69_4bhy"/>`,
		"fallback": "streamline:microscope-observation-sciene-remix",
	});
}

export default Component;
