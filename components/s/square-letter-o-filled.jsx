import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn62sxfmg.css';
import '../../css/v/vyx2y7bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn62sxfmg"/><path clip-rule="evenodd" class="vyx2y7bdd"/>`,
		"fallback": "lucide-extended:square-letter-o-filled",
	});
}

export default Component;
