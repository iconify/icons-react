import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdptdp_tz.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/o/ois7fhesa.css';
import '../../css/y/y55dqq1dn.css';
import '../../css/z/zkw8ip-7w.css';
import '../../css/f/f1gpxr9vo.css';
import '../../css/m/m8195sbyc.css';
import '../../css/g/gadek42qf.css';
import '../../css/c/clvrsyb1i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdptdp_tz"/><g class="brzn_0bpr"><path class="ois7fhesa"/><path class="y55dqq1dn"/><path class="zkw8ip-7w"/><path class="f1gpxr9vo"/><circle class="m8195sbyc"/><path class="gadek42qf"/><path class="clvrsyb1i"/></g>`,
		"fallback": "openmoji:stick-figure-with-dress-and-arms-raised",
	});
}

export default Component;
