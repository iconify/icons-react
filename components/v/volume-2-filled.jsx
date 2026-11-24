import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iigzx5b6a.css';
import '../../css/o/ou4giibdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iigzx5b6a"/><path class="ou4giibdr"/>`,
		"fallback": "lucide-extended:volume-2-filled",
	});
}

export default Component;
