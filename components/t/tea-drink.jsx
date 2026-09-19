import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hk8hgpbxp.css';
import '../../css/j/jhzfp4b_z.css';
import '../../css/m/mi7jg8b-u.css';
import '../../css/t/txpk_4byv.css';
import '../../css/j/jvsfxbclw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="hk8hgpbxp"/><path class="jhzfp4b_z"/><path class="mi7jg8b-u"/><path class="txpk_4byv"/><path class="jvsfxbclw"/></g>`,
		"fallback": "icon-park:tea-drink",
	});
}

export default Component;
