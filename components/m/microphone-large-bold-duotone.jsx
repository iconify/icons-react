import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efadb7byl.css';
import '../../css/l/lspzmtb7m.css';
import '../../css/e/equ__7k7z.css';
import '../../css/d/dw38h4bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efadb7byl"/><path class="lspzmtb7m"/><path class="equ__7k7z"/><path class="dw38h4bdg"/>`,
		"fallback": "solar:microphone-large-bold-duotone",
	});
}

export default Component;
