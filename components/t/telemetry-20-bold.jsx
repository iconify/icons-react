import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujn-tbcgw.css';
import '../../css/r/r7__an0bz.css';
import '../../css/g/gcjjvpb6i.css';
import '../../css/a/as8ixpmmn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujn-tbcgw"/><path class="r7__an0bz"/><path class="gcjjvpb6i"/><path class="as8ixpmmn"/>`,
		"fallback": "energy-icons:telemetry-20-bold",
	});
}

export default Component;
