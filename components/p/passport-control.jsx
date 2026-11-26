import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru36gnb2i.css';
import '../../css/g/gdp-lpbgi.css';
import '../../css/u/uee0bnb9m.css';
import '../../css/k/k2qweuboq.css';
import '../../css/q/qjfv279ji.css';
import '../../css/t/ti19ytbje.css';
import '../../css/j/j2ibbyx1m.css';
import '../../css/c/c6j6ztbsf.css';
import '../../css/o/o08l8cbww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG2ywEkcDq" cx="66.2" cy="55.2" r="147.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="ru36gnb2i"/><stop offset=".85" class="gdp-lpbgi"/><stop offset="1" class="gdp-lpbgi"/></radialGradient></defs><path class="uee0bnb9m"/><path fill="url(#SVG2ywEkcDq)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="k2qweuboq"/><path class="qjfv279ji"/><path class="ti19ytbje"/><path class="j2ibbyx1m"/><path class="c6j6ztbsf"/><path class="o08l8cbww"/>`,
		"fallback": "xero-emoji:passport-control",
	});
}

export default Component;
