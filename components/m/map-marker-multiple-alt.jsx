import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/r/rlautr.css';
import '../../css/y/yuzzkf.css';
import '../../css/a/a2c61k.css';
import '../../css/q/qw8aly.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s8e22g.css';
import '../../css/v/vsl3op.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/d/d-h46djy.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfty28cGD"><path class="g_1xrq rlautr yuzzkf"/><path class="a2c61k g_1xrq qw8aly"/></mask></defs><path mask="url(#SVGfty28cGD)" class="lsejuv ydovum"/><path class="a2c61k g_1xrq s8e22g yuzzkf"/><circle class="vsl3op ydovum"/>`,
		"fallback": "line-md:map-marker-multiple-alt",
	});
}

export default Component;
