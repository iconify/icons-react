import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikyqjeyhj.css';
import '../../css/b/b06tnvrbo.css';
import '../../css/h/hql3ldhxa.css';
import '../../css/o/oynu9y2bq.css';
import '../../css/k/kbnb9jw_y.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ikyqjeyhj"/><path class="b06tnvrbo clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 hql3ldhxa"/><path class="clr-i-outline clr-i-outline-path-4 oynu9y2bq"/><path class="clr-i-outline clr-i-outline-path-5 kbnb9jw_y"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:lightbulb-line",
	});
}

export default Component;
