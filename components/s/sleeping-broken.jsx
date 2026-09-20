import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykeq5bdg.css';
import '../../css/i/iyo-0bcus.css';
import '../../css/l/l6md27rub.css';
import '../../css/z/z8ghc5bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zykeq5bdg"/><path class="iyo-0bcus"/><path class="l6md27rub"/><path class="z8ghc5bsj"/></g>`,
		"fallback": "solar:sleeping-broken",
	});
}

export default Component;
