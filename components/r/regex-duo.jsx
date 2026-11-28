import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a0njtnbcl.css';
import '../../css/j/j5gwsvbqu.css';
import '../../css/g/gq6m_vbam.css';
import '../../css/d/dxir9oplz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a0njtnbcl"/><path class="j5gwsvbqu"/><path class="gq6m_vbam"/><path class="dxir9oplz"/></g>`,
		"fallback": "iconaut:regex-duo",
	});
}

export default Component;
