import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx0z78bot.css';
import '../../css/t/tdaucbcdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx0z78bot"/><path class="tdaucbcdb"/>`,
		"fallback": "lucide-extended:server-off-filled",
	});
}

export default Component;
