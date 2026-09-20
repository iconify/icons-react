import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfppa6zwk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfppa6zwk"/>`,
		"fallback": "streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust",
	});
}

export default Component;
