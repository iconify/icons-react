import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t_m_ghbiu.css';
import '../../css/h/hjn7kwbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t_m_ghbiu"/><path class="hjn7kwbhn"/></g>`,
		"fallback": "covid:vaccine-protection-infrared-thermometer-gun",
	});
}

export default Component;
