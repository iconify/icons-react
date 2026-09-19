import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqz3k7l0s.css';
import '../../css/u/umflg2bzj.css';
import '../../css/z/zw5694aua.css';
import '../../css/t/te8604bdt.css';
import '../../css/f/fe7rbjd3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqz3k7l0s"/><path class="umflg2bzj"/><path class="zw5694aua"/><circle class="te8604bdt"/><path class="fe7rbjd3a"/>`,
		"fallback": "fxemoji:militarymedal",
	});
}

export default Component;
