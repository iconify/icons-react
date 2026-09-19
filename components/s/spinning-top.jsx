import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/i/iimhfp_bg.css';
import '../../css/z/z9tc4tbok.css';
import '../../css/z/zx2accbtj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ2l9xbeL"><g class="wqznn1ydc"><path class="iimhfp_bg"/><path class="z9tc4tbok"/><path class="zx2accbtj"/></g></mask></defs><path mask="url(#SVGJ2l9xbeL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:spinning-top",
	});
}

export default Component;
