import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvmutbc5a.css';
import '../../css/f/fift-7btu.css';
import '../../css/t/t40xb7btq.css';
import '../../css/s/scfermb5u.css';
import '../../css/v/vkqm4g6bs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvmutbc5a"/><path class="fift-7btu"/><path class="t40xb7btq"/><path class="scfermb5u"/><path class="vkqm4g6bs"/>`,
		"fallback": "energy-icons:solar-panel-sun-20",
	});
}

export default Component;
