import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smr82qbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smr82qbco"/>`,
		"fallback": "lucide-extended:pickaxe-filled",
	});
}

export default Component;
