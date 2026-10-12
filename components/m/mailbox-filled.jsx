import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg8fk_74i.css';
import '../../css/h/hjncjwk0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg8fk_74i"/><path clip-rule="evenodd" class="hjncjwk0j"/>`,
		"fallback": "lucide-extended:mailbox-filled",
	});
}

export default Component;
