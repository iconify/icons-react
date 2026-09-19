import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx0vkcbsy.css';
import '../../css/i/iarpp2o_e.css';
import '../../css/h/hk6ft-98v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYl1ZTd2R"><g class="ft5dv1b6b"><path class="tx0vkcbsy"/><path class="iarpp2o_e"/><path class="hk6ft-98v"/></g></mask></defs><path mask="url(#SVGYl1ZTd2R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-alphabet",
	});
}

export default Component;
