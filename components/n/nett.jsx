import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu4uxxb2t.css';
import '../../css/d/d8a-he8ve.css';
import '../../css/j/jbqmj0hrk.css';
import '../../css/q/q8ukyccho.css';
import '../../css/v/vdmxvxn_w.css';
import '../../css/g/gmcau7bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu4uxxb2t"/><path class="d8a-he8ve"/><path class="jbqmj0hrk"/><path class="q8ukyccho"/><path class="vdmxvxn_w"/><path class="gmcau7bzu"/>`,
		"fallback": "token:nett",
	});
}

export default Component;
