import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4q8gybuy.css';
import '../../css/p/pl0eixign.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4q8gybuy"/><path class="pl0eixign"/>`,
		"fallback": "energy-icons:superscript-20-bold",
	});
}

export default Component;
