import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_ircnbzb.css';
import '../../css/b/bncl5bqie.css';
import '../../css/g/gdjn7oggh.css';
import '../../css/d/dwr8i5vns.css';
import '../../css/f/fy270jxws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_ircnbzb"/><path class="bncl5bqie"/><path class="gdjn7oggh"/><path class="dwr8i5vns"/><path class="fy270jxws"/>`,
		"fallback": "energy-icons:robot-arm-20-bold",
	});
}

export default Component;
