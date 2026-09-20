import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eqz6b-9nd.css';
import '../../css/g/gde1dre0o.css';
import '../../css/w/wi5kxsbwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="eqz6b-9nd"/><rect class="gde1dre0o"/><path class="wi5kxsbwp"/></g>`,
		"fallback": "streamline:interface-align-horizontal-center-align-center-design",
	});
}

export default Component;
