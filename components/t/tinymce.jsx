import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp5npu6fr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp5npu6fr"/>`,
		"fallback": "file-icons:tinymce",
	});
}

export default Component;
