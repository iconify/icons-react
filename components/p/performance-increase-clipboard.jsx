import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oc07qtb8a.css';
import '../../css/p/pp_g3wbcg.css';
import '../../css/x/xoxizzbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oc07qtb8a"/><path class="pp_g3wbcg"/><path class="xoxizzbkv"/></g>`,
		"fallback": "streamline-freehand:performance-increase-clipboard",
	});
}

export default Component;
