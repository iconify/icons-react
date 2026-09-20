import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3m48pb3x.css';
import '../../css/t/tcklekb-k.css';
import '../../css/f/fr78w7boo.css';
import '../../css/j/j4gjthbnr.css';
import '../../css/t/tatq48slt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3m48pb3x"/><path class="tcklekb-k"/><path class="fr78w7boo"/><path class="j4gjthbnr"/><path class="tatq48slt"/>`,
		"fallback": "token:kuji",
	});
}

export default Component;
