import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbhmpnbzu.css';
import '../../css/y/yyarl5mho.css';
import '../../css/w/wxzzy-8jl.css';
import '../../css/o/o7bzzabge.css';
import '../../css/m/mgbg27bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbhmpnbzu"/><path class="yyarl5mho"/><path class="wxzzy-8jl"/><path class="o7bzzabge"/><path class="mgbg27bmw"/>`,
		"fallback": "solar:list-minus-outline",
	});
}

export default Component;
