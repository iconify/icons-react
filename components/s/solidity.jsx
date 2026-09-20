import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpnx4y-fi.css';
import '../../css/w/w3zqk88xs.css';
import '../../css/d/dk-crda_u.css';
import '../../css/s/s030i9bwg.css';
import '../../css/y/y2amuvuiz.css';
import '../../css/o/oatrgdbxf.css';

const viewBox = {"width":1300,"height":1300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpnx4y-fi"/><path class="w3zqk88xs"/><path class="dk-crda_u"/><path class="s030i9bwg"/><path class="y2amuvuiz"/><path class="oatrgdbxf"/>`,
		"fallback": "thesvg-color:solidity",
	});
}

export default Component;
