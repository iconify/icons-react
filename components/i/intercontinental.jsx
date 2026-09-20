import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdn533bfi.css';
import '../../css/l/lf718-b9b.css';
import '../../css/f/fhmvqpb5f.css';
import '../../css/w/wgi1qbc_y.css';
import '../../css/a/affclob-e.css';
import '../../css/k/kgbxocb4m.css';

const viewBox = {"width":125,"height":63,"left":-0.295,"top":-0.15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdn533bfi"/><path class="lf718-b9b"/><path class="fhmvqpb5f"/><path class="wgi1qbc_y"/><path class="affclob-e"/><path class="kgbxocb4m"/>`,
		"fallback": "thesvg-color:intercontinental",
	});
}

export default Component;
