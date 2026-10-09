import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7css8qyx.css';
import '../../css/t/t3qrchbmg.css';
import '../../css/x/xlefwjb-d.css';
import '../../css/i/ii8kgdb-j.css';
import '../../css/l/lshrqm29f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7css8qyx"/><path class="t3qrchbmg"/><path class="xlefwjb-d"/><path class="ii8kgdb-j"/><path class="lshrqm29f"/>`,
		"fallback": "energy-icons:recycling-bin-20-bold",
	});
}

export default Component;
