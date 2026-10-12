import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6567db_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6567db_g"/>`,
		"fallback": "lucide-extended:vector-square-filled",
	});
}

export default Component;
