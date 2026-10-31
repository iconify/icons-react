import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wrq5wez0k.css';
import '../../css/i/iax3wm1hh.css';
import '../../css/y/ymsnbooef.css';
import '../../css/m/mnc_-ccse.css';
import '../../css/o/oqrn10y8q.css';
import '../../css/s/spx9y234u.css';
import '../../css/z/zux2zobon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wrq5wez0k"/><path class="iax3wm1hh"/><path class="ymsnbooef"/><path class="mnc_-ccse"/><path class="oqrn10y8q"/><path class="spx9y234u"/><path class="wm-s zux2zobon"/></g>`,
		"fallback": "withicons-retro:phone-incoming",
	});
}

export default Component;
