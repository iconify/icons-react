import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9wh86bhu.css';
import '../../css/u/udfv0g6tu.css';
import '../../css/v/viull-tzw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9wh86bhu"/><path class="udfv0g6tu"/><path class="viull-tzw"/>`,
		"fallback": "energy-icons:tea-cup-20-bold",
	});
}

export default Component;
