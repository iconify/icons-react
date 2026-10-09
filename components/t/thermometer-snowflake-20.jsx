import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zve7bwi.css';
import '../../css/p/ppk8d-n1m.css';
import '../../css/d/dyrpvlfpb.css';
import '../../css/p/px1s3hbev.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zve7bwi"/><path class="ppk8d-n1m"/><path class="dyrpvlfpb"/><path class="px1s3hbev"/>`,
		"fallback": "energy-icons:thermometer-snowflake-20",
	});
}

export default Component;
