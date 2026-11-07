import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k90b1n3tg.css';
import '../../css/d/djha1e-kq.css';
import '../../css/m/mfnnv9grh.css';
import '../../css/t/thw7pvbec.css';
import '../../css/f/ftoixesmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k90b1n3tg"/><path clip-rule="evenodd" class="djha1e-kq"/><path class="mfnnv9grh"/><path class="thw7pvbec"/><path class="ftoixesmy"/>`,
		"fallback": "solar:rounded-magnifier-bug-bold",
	});
}

export default Component;
