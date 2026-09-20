import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkw64wbcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkw64wbcp"/>`,
		"fallback": "streamline:microscope-observation-sciene-solid",
	});
}

export default Component;
