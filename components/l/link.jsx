import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/y/ysbr-1dlt.css';
import '../../css/r/r9lwvdm6p.css';
import '../../css/l/lzqaeccfs.css';
import '../../css/h/h-8i2_bzw.css';
import '../../css/a/aifyhgb8i.css';
import '../../css/z/zqa7fpb2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g class="c-zrgpb5l"><path class="ysbr-1dlt"/><path class="r9lwvdm6p"/></g><g class="c-zrgpb5l"><path class="lzqaeccfs"/><path class="h-8i2_bzw"/></g><path class="aifyhgb8i"/><path class="zqa7fpb2o"/></g>`,
		"fallback": "xero-emoji:link",
	});
}

export default Component;
