import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/z/zc6fw0k_a.css';
import '../../css/q/qw6i-_b4t.css';
import '../../css/e/eijguwp1k.css';
import '../../css/n/na-h04rle.css';
import '../../css/f/f_wmpvm9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="zc6fw0k_a"/><path class="qw6i-_b4t"/><path class="eijguwp1k"/><path class="na-h04rle"/><path class="f_wmpvm9m"/></g>`,
		"fallback": "solar:reel-line-duotone",
	});
}

export default Component;
