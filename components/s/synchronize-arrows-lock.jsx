import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q74f6xbpm.css';
import '../../css/d/dldid0mvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q74f6xbpm"/><path class="dldid0mvv"/></g>`,
		"fallback": "streamline-ultimate:synchronize-arrows-lock",
	});
}

export default Component;
