import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdei6-b8p.css';
import '../../css/s/sdpl1vxew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdei6-b8p"/><path class="sdpl1vxew"/>`,
		"fallback": "lucide-extended:shield-lock-filled",
	});
}

export default Component;
