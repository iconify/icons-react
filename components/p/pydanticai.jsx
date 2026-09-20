import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nkh5-vxws.css';
import '../../css/s/sj3c-dp5f.css';
import '../../css/x/xqvm7kvtl.css';
import '../../css/b/bhf44_bvt.css';
import '../../css/w/wrri26bwq.css';
import '../../css/d/drgoi2jbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nkh5-vxws"/><path class="sj3c-dp5f"/><path class="xqvm7kvtl"/><path class="bhf44_bvt"/><path class="wrri26bwq"/><path class="drgoi2jbk"/></g>`,
		"fallback": "thesvg:pydanticai",
	});
}

export default Component;
