import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlwx6gi2i.css';
import '../../css/q/qg-nlobsy.css';
import '../../css/u/urb8q9byp.css';
import '../../css/t/t2oskfn-j.css';
import '../../css/b/bagf1y96k.css';
import '../../css/z/zmk5trhar.css';
import '../../css/w/wvcoj4h9z.css';
import '../../css/m/mu7ir6zgy.css';
import '../../css/h/hgezuvf6l.css';
import '../../css/b/bktddwbiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlwx6gi2i"/><path class="qg-nlobsy"/><path class="urb8q9byp"/><path class="t2oskfn-j"/><path class="bagf1y96k"/><path class="zmk5trhar"/><path class="wvcoj4h9z"/><path class="mu7ir6zgy"/><path class="hgezuvf6l"/><path class="bktddwbiy"/>`,
		"fallback": "streamline-emojis:ring-1",
	});
}

export default Component;
