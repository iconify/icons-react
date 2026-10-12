import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-i7xbe_m.css';
import '../../css/g/g7fuoqbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-i7xbe_m"/><path clip-rule="evenodd" class="g7fuoqbeu"/>`,
		"fallback": "lucide-extended:playing-cards-filled",
	});
}

export default Component;
