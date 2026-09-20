import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbt1npb8q.css';
import '../../css/q/qq_asobta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dbt1npb8q"/><path class="qq_asobta"/></g>`,
		"fallback": "mage:unlocked",
	});
}

export default Component;
