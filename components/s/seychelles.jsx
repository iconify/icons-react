import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtdytvbpv.css';
import '../../css/e/e7pbvn6ja.css';
import '../../css/v/vvjhkvdzn.css';
import '../../css/r/r96aovb-i.css';
import '../../css/o/o1e6b-b6r.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtdytvbpv"/><path class="e7pbvn6ja"/><path class="vvjhkvdzn"/><path class="r96aovb-i"/><path class="o1e6b-b6r"/>`,
		"fallback": "tabler-flags:seychelles",
	});
}

export default Component;
