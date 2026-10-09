import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flvfhbxkj.css';
import '../../css/e/epd7hgbik.css';
import '../../css/i/iw_3o3g9q.css';
import '../../css/d/dq1tynbis.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flvfhbxkj"/><path class="epd7hgbik"/><path class="iw_3o3g9q"/><path class="dq1tynbis"/>`,
		"fallback": "energy-icons:small-wind-turbine-20-bold",
	});
}

export default Component;
