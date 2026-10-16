import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5t7ghb5y.css';
import '../../css/a/ahl_moh8l.css';
import '../../css/g/gvfq-iurq.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5t7ghb5y"/><path class="ahl_moh8l"/><path class="gvfq-iurq"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:offshore-hydrogen-20-bold",
	});
}

export default Component;
