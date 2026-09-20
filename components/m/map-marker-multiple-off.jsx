import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djeo3r.css';
import '../../css/g/g_1xrq.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/n/n53t9u.css';
import '../../css/q/qc_pkd.css';
import '../../css/u/uv8ddv.css';
import '../../css/b/b45h2f.css';
import '../../css/n/nsraqz.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiUiBxe4C"><path class="awc_3v djeo3r g_1xrq yuzzkf zxndow"/><path class="awc_3v g_1xrq n53t9u qc_pkd uv8ddv"/><path class="awc_3v g_1xrq n53t9u yuzzkf zxndow"/><circle class="b45h2f"/><path class="g_1xrq nsraqz qc_pkd tbv09e yuzzkf"/></mask></defs><path mask="url(#SVGiUiBxe4C)" class="botfzx"/><path class="g_1xrq gd_4-q tbv09e yuzzkf"/>`,
		"fallback": "line-md:map-marker-multiple-off",
	});
}

export default Component;
