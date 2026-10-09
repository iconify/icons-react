import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2uizub6o.css';
import '../../css/h/hi9s2obbi.css';
import '../../css/i/ie-ykwxtd.css';
import '../../css/b/bo570lbnv.css';
import '../../css/l/l55kowkxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2uizub6o"/><path class="hi9s2obbi"/><path class="ie-ykwxtd"/><path class="bo570lbnv"/><path class="l55kowkxq"/>`,
		"fallback": "energy-icons:robot-arm-48-bold",
	});
}

export default Component;
