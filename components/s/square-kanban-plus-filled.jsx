import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu0if9b0f.css';
import '../../css/q/qb2gh7q5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hu0if9b0f"/><path class="qb2gh7q5f"/>`,
		"fallback": "lucide-extended:square-kanban-plus-filled",
	});
}

export default Component;
