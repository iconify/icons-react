import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igu5nxbvw.css';
import '../../css/z/zqf1rq4kw.css';
import '../../css/c/caatl5bgv.css';
import '../../css/k/k16gslnbh.css';
import '../../css/u/ujf4epwmv.css';
import '../../css/z/zubq3jbcg.css';
import '../../css/s/srmnu56no.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/z/z8816bczw.css';
import '../../css/a/ap21f5e2r.css';
import '../../css/w/wo730-dxl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="igu5nxbvw"/><circle class="zqf1rq4kw"/><circle class="caatl5bgv"/><circle class="k16gslnbh"/><circle class="ujf4epwmv"/><path class="zubq3jbcg"/><path class="srmnu56no"/><g class="hzhb0bcwn"><path class="z8816bczw"/><path class="ap21f5e2r"/><path class="wo730-dxl"/></g>`,
		"fallback": "openmoji:swipe",
	});
}

export default Component;
