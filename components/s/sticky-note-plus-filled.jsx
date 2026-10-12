import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcro2yo8e.css';
import '../../css/a/aju00ib0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcro2yo8e"/><path class="aju00ib0g"/>`,
		"fallback": "lucide-extended:sticky-note-plus-filled",
	});
}

export default Component;
