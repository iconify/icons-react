import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vriq6ibyu.css';
import '../../css/z/zdq3t7bnx.css';
import '../../css/k/k3_n6ibuu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkEHuie6j"><g class="wwvp95byt"><path class="vriq6ibyu"/><path class="zdq3t7bnx"/><path class="k3_n6ibuu"/></g></mask></defs><path mask="url(#SVGkEHuie6j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:rectangle-tear",
	});
}

export default Component;
