import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di0sukb5w.css';
import '../../css/h/ho6ftnbun.css';
import '../../css/p/pembsco1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di0sukb5w"/><path class="ho6ftnbun"/><path class="pembsco1c"/>`,
		"fallback": "lucide-extended:radio-tower-filled",
	});
}

export default Component;
